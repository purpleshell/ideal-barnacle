import bcrypt from "bcryptjs";
import { Request } from "express";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../UserEntity";
import { UserLoginInfo, UserRegistrationInfo } from "./modules/UserInfo";

interface RequestContext {
  req: Request;
}

@Resolver()
export class UserResolvers {
  @Query(() => [User])
  async user() {
    return User.find({ relations: ["sets"] });
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() requestContext: RequestContext) {
    // if (!requestContext) {
    //   return null;
    // }
    if (!requestContext.req) {
      return null;
    }
    // if (!requestContext.req.session) {
    //   return null;
    // }
    // if (!requestContext.req.session!.userId) {
    //   return null;
    // }

    return User.findOne(requestContext.req.session!.userId);
  }

  @Mutation(() => User)
  async registerUser(@Arg("userRegistrationInfo")
  {
    password,
    username,
    ...rest
  }: UserRegistrationInfo): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);
    username = username
      .split(" ")
      .map(s => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");
    const user = await User.create({
      password: hashedPassword,
      username: username,
      ...rest
    }).save();
    return user;
  }

  @Mutation(() => User, { nullable: true })
  async loginUser(
    @Arg("userLoginInfo")
    { password, email }: UserLoginInfo,
    @Ctx() requestContext: RequestContext
  ): Promise<User | null> {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return null;
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return null;
    }

    if (requestContext.req.session) {
      requestContext.req.session.userId = user.id;
    }

    if (!requestContext.req.session) {
      return user;
    }

    return user;
  }
}
