import bcrypt from "bcryptjs";
import { Request } from "express";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../UserEntity";
import { UserRegistrationInfo } from "./modules/UserResgistrationInfo";

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
    if (!requestContext.req.session!.userId) {
      return null;
    }

    return User.findOne(requestContext.req.session!.userId);
  }

  @Mutation(() => User)
  async registerUser(@Arg("userRegistrationInfo")
  {
    password,
    ...rest
  }: UserRegistrationInfo): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      password: hashedPassword,
      ...rest
    }).save();
    return user;
  }

  @Mutation(() => User, { nullable: true })
  async loginUser(
    @Arg("email") email: string,
    @Arg("password") password: string,
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

    requestContext.req.session!.userId = user.id;

    return user;
  }
}
