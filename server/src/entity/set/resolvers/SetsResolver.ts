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

@InputType({ description: "Create new set data" })
class CreateSetInput implements Partial<Set> {
  @Field() exerciseName: string;
  @Field() warmUp: boolean;
  @Field() weight: number;
  @Field() systemOfMeasurement: string;
  @Field(() => Int) reps: number;
  @Field() rpe: number;
  @Field(() => ID) userId: string;
}

@InputType({ description: "Update set data" })
class UpdateSetInput implements Partial<Set> {
  @Field() id: string;
  @Field({ nullable: true }) warmUp?: boolean;
  @Field({ nullable: true }) weight?: number;
  @Field({ nullable: true }) systemOfMeasurement?: string;
  @Field(() => Int, { nullable: true }) reps?: number;
  @Field({ nullable: true }) rpe?: number;
  @Field(() => Int, { nullable: true }) order?: number;
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

  @Mutation(() => Boolean)
  async deleteSet(@Arg("id") id: string): Promise<Boolean> {
    const set = await Set.findOne({ where: { id: id } });
    if (set === undefined) {
      return false;
    } else {
      await Set.delete({ id: id });
      return true;
    }
  }

  @Mutation(() => Boolean)
  async updateSet(@Arg("updateSetData")
  {
    id,
    ...rest
  }: UpdateSetInput): Promise<Boolean> {
    const set = await Set.findOne({ where: { id: id } });
    if (set === undefined) {
      return false;
    } else {
      Set.update(id, rest);
      return true;
    }
  }
}
