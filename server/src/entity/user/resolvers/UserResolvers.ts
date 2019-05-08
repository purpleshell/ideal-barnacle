import bcrypt from "bcryptjs";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../UserEntity";
import { UserRegistrationInfo } from "./modules/UserResgistrationInfo";

@Resolver()
export class UserResolvers {
  @Query(() => [User])
  async user() {
    return User.find({ relations: ["sets"] });
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
