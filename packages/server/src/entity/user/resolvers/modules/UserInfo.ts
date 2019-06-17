import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class UserRegistrationInfo {
  @Length(1, 30)
  @Field()
  username: string;

  @IsEmail()
  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class UserLoginInfo {
  @IsEmail()
  @Field()
  email: string;

  @Field()
  password: string;
}
