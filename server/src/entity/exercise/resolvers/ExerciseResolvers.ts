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
    exerciseName = exerciseName
      .split(" ")
      .map(s => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");
    targetMuscles = targetMuscles
      .split(" ")
      .map(s => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");
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

  // TODO - optimize frontend to only mutate the diff on form fields
  @Mutation(() => Boolean)
  async updateExercise(
    @Arg("exerciseName") exerciseName: string,
    @Arg("newExerciseName") newExerciseName: string,
    @Arg("newTargetMuscles") newTargetMuscles: string
  ) {
    try {
      const exercise = await Exercise.findOne({ exerciseName: exerciseName });
      if (exercise != undefined) {
        exercise.exerciseName = newExerciseName
          .split(" ")
          .map(s => s.charAt(0).toUpperCase() + s.slice(1))
          .join(" ");
        exercise.targetMuscles = newTargetMuscles
          .split(" ")
          .map(s => s.charAt(0).toUpperCase() + s.slice(1))
          .join(" ");
        exercise.save();
      }
      return true;
    } catch {
      return false;
    }
  }
}
