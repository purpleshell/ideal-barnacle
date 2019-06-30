// import { TargetMuscle } from "@ideal-barnacle/common";
import { TargetMuscle } from "@ideal-barnacle/common";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { RequestContext } from "../../Context";
import { User } from "../../user/UserEntity";
import { Exercise } from "../ExerciseEntity";
import { CreateExerciseInput } from "./modules/ExerciseInputs";

@Resolver()
export class ExerciseResolvers {
  @Query(() => [Exercise])
  async exercise() {
    return Exercise.find({ relations: ["user", "sets"] });
  }

  @Query(() => [Exercise])
  async userExercise(@Ctx() ctx: RequestContext) {
    if (!ctx.req.session) {
      return null;
    }
    if (!ctx.req.session!.userId) {
      return null;
    }

    const user = await User.findOne(ctx.req.session!.userId);

    const exercises = await Exercise.find({
      where: { user: user },
      relations: ["sets"]
    });

    if (!exercises) {
      return null;
    }
    return exercises;
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
    @Arg("createExerciseInput")
    { exerciseName, ...rest }: CreateExerciseInput,
    @Ctx() ctx: RequestContext
  ): Promise<Exercise> {
    const user = await User.findOne(ctx.req.session!.userId);
    const formattedExerciseName = this.formatExerciseName(exerciseName);
    const exercise = await Exercise.create({
      exerciseName: formattedExerciseName,
      user: user,
      ...rest
    }).save();
    const returnExercise = await Exercise.findOne({
      where: { id: exercise.id },
      relations: ["user"]
    });
    if (returnExercise) {
      return returnExercise;
    }
    return exercise;
  }

  // @Mutation(() => Exercise)
  // async createExercise(
  //   @Arg("exerciseName") exerciseName: string,
  //   @Arg("targetMuscles", () => [TargetMuscle]) targetMuscles: [TargetMuscle],
  // ) {
  //   const exercise = await Exercise.create({
  //     exerciseName,
  //     targetMuscles,
  //     user
  //   }).save();
  //   return exercise;
  // }

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
