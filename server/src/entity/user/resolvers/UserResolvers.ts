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
  async me(@Ctx() ctx: RequestContext) {
    // if (!ctx) {
    //   return null;
    // }
    // if (!ctx.req) {
    //   return null;
    // }
    if (!ctx.req.session) {
      return null;
    }
    if (!ctx.req.session!.userId) {
      return null;
    }

    return User.findOne(ctx.req.session!.userId);
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
    { email, password }: UserLoginInfo,
    @Ctx() ctx: RequestContext
  ): Promise<User | null> {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return null;
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return null;
    }

    if (ctx.req.session) {
      ctx.req.session.userId = user.id;
    }

    if (!ctx.req.session) {
      return user;
    }

    return user;
  }
}
