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
}
