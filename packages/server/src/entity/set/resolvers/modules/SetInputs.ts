import { Field, InputType, Int } from "type-graphql";
import { Set } from "../../SetEntity";

@InputType({ description: "Input data for Create set resolver" })
export class CreateSetInput implements Partial<Set> {
  @Field() warmUp: boolean;
  @Field() weight: number;
  @Field() systemOfMeasurement: string;
  @Field(() => Int) reps: number;
  @Field() rpe: number;
  @Field() exerciseId: string;
  @Field() date: Date;
  @Field(() => Int, { nullable: true }) order?: number;
}

@InputType({ description: "Input data for Update set resolver" })
export class UpdateSetInput implements Partial<Set> {
  @Field() id: string;
  @Field({ nullable: true }) warmUp?: boolean;
  @Field({ nullable: true }) weight?: number;
  @Field({ nullable: true }) systemOfMeasurement?: string;
  @Field(() => Int, { nullable: true }) reps?: number;
  @Field({ nullable: true }) rpe?: number;
  @Field(() => Int, { nullable: true }) order?: number;
}
