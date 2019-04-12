import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class UserRegistrationInfo {
  @Field()
  @Length(1, 30)
  userName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}
