import { TargetMuscle } from "@ideal-barnacle/common";
import { Field, InputType, Int } from "type-graphql";
import { Exercise } from "../../ExerciseEntity";

@InputType({ description: "Input data for Create exercise resolver" })
export class CreateExerciseInput implements Partial<Exercise> {
  @Field() exerciseName: string;
  @Field(() => TargetMuscle, {
    nullable: false
  })
  targetMuscles: TargetMuscle[];
}

@InputType({ description: "Input data for Update exercise resolver" })
export class UpdateExerciseInput implements Partial<Exercise> {
  @Field() id: string;
  @Field({ nullable: true }) warmUp?: boolean;
  @Field({ nullable: true }) weight?: number;
  @Field({ nullable: true }) systemOfMeasurement?: string;
  @Field(() => Int, { nullable: true }) reps?: number;
  @Field({ nullable: true }) rpe?: number;
  @Field(() => Int, { nullable: true }) order?: number;
}
