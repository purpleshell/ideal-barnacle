import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class UserRegistrationInfo {
  @Length(1, 30)
  @Field()
  userName: string;

  @IsEmail()
  @Field()
  email: string;

  @Field()
  password: string;
}
