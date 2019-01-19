import { Resolver, Query, Mutation, Arg } from "type-graphql";
import bcrypt from "bcryptjs";

import { User } from "../UserEntity";
import { UserRegistrationInfo } from "./modules/UserResgistrationInfo";

@Resolver()
export class RegisterUserResolver {
  @Query(() => [User])
  async user() {
    return User.find();
  }

  @Mutation(() => User)
  async registerUser(@Arg("userRegistrationInfo")
  {
    userName,
    email,
    password
  }: UserRegistrationInfo): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      userName,
      email,
      password: hashedPassword
    }).save();
    return user;
  }
}
