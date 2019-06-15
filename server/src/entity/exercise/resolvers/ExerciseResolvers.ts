import { TargetMuscle } from "@ideal-barnacle/common";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Exercise } from "../ExerciseEntity";

@Resolver()
export class ExerciseResolvers {
  @Query(() => [Exercise])
  async exercise() {
    return Exercise.find();
  }

  private formatExerciseName = (exerciseName: string) => {
    return exerciseName
      .toLowerCase()
      .split(" ")
      .map(s => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");
  };

  @Mutation(() => Exercise)
  async createExercise(
    @Arg("exerciseName") exerciseName: string,
    @Arg("targetMuscles", () => [TargetMuscle]) targetMuscles: [TargetMuscle]
  ): Promise<Exercise> {
    exerciseName = this.formatExerciseName(exerciseName);
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
    @Arg("newTargetMuscles", () => [TargetMuscle])
    newTargetMuscles: [TargetMuscle]
  ) {
    try {
      const exercise = await Exercise.findOne({ exerciseName: exerciseName });
      if (exercise != undefined) {
        exercise.exerciseName = exerciseName = this.formatExerciseName(
          newExerciseName
        );
        exercise.targetMuscles = newTargetMuscles;
        exercise.save();
      }
      return true;
    } catch {
      return false;
    }
  }
}
