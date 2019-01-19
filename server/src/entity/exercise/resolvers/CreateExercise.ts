import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Exercise } from "../ExerciseEntity";

@Resolver()
export class CreateExerciseResolver {
  @Query(() => [Exercise])
  async exercise() {
    return Exercise.find();
  }

  @Mutation(() => Exercise)
  async createExercise(
    @Arg("exerciseName") exerciseName: string,
    @Arg("targetMuscles") targetMuscles: string
  ): Promise<Exercise> {
    const exercise = await Exercise.create({
      exerciseName,
      targetMuscles
    }).save();
    return exercise;
  }
}
