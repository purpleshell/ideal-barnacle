import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Exercise } from "../ExerciseEntity";

@Resolver()
export class ExerciseResolvers {
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

  @Mutation(() => Boolean)
  async deleteExercise(@Arg("exerciseName") exerciseName: string) {
    try {
      await Exercise.delete({ exerciseName: exerciseName });
      return true;
    } catch {
      return false;
    }
  }

  @Mutation(() => Boolean)
  async updateExercise(
    @Arg("exerciseName") exerciseName: string,
    @Arg("newExerciseName") newExerciseName: string,
    @Arg("newTargetMuscles") newTargetMuscles: string
  ) {
    try {
      const exercise = await Exercise.findOne({ exerciseName: exerciseName });
      if (exercise != undefined) {
        exercise.exerciseName = newExerciseName;
        exercise.targetMuscles = newTargetMuscles;
        exercise.save();
      }
      return true;
    } catch {
      return false;
    }
  }
}
