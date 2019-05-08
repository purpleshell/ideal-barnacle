import {
  Arg,
  Field,
  ID,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver
} from "type-graphql";
import { Set } from "../SetEntity";

@InputType({ description: "New set data" })
class CreateSetInput implements Partial<Set> {
  @Field() exerciseName: string;
  @Field() warmUp: boolean;
  @Field() weight: number;
  @Field() systemOfMeasurement: string;
  @Field(() => Int) reps: number;
  @Field() rpe: number;
  @Field(() => ID) userId: string;
}

@Resolver()
export class SetResolvers {
  @Query(() => [Set])
  async set() {
    return await Set.find({ relations: ["user"] });
  }

  @Mutation(() => Set)
  async createSet(
    @Arg("newSetData")
    newSetData: CreateSetInput
  ): Promise<Set> {
    const set = await Set.create(newSetData).save();
    const returnSet = await Set.findOne({
      where: { id: set.id },
      relations: ["user"]
    });
    if (returnSet) {
      return returnSet;
    }
    return set;
  }
}

//   @Mutation(() => Boolean)
//   async deleteSet(@Arg("exerciseName") exerciseName: string) {
//     try {
//       await Set.delete({ exerciseName: exerciseName });
//       return true;
//     } catch {
//       return false;
//     }
//   }

//   @Mutation(() => Boolean)
//   async updateSet(
//     @Arg("exerciseName") exerciseName: string,
//     @Arg("newSetName") newSetName: string,
//     @Arg("newTargetMuscles") newTargetMuscles: string
//   ) {
//     try {
//       const exercise = await Set.findOne({ exerciseName: exerciseName });
//       if (exercise != undefined) {
//         exercise.exerciseName = newSetName
//           .split(" ")
//           .map(s => s.charAt(0).toUpperCase() + s.slice(1))
//           .join(" ");
//         exercise.targetMuscles = newTargetMuscles
//           .split(" ")
//           .map(s => s.charAt(0).toUpperCase() + s.slice(1))
//           .join(" ");
//         exercise.save();
//       }
//       return true;
//     } catch {
//       return false;
//     }
//   }
// }
