import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { RequestContext } from "../../Context";
import { User } from "../../user/UserEntity";
import { Set } from "../SetEntity";
import { CreateSetInput, UpdateSetInput } from "./modules/SetInputs";

@Resolver()
export class SetResolvers {
  @Query(() => [Set])
  async set() {
    return await Set.find({ relations: ["user"] });
  }

  @Mutation(() => Set)
  async createSet(
    @Arg("createSetInput")
    createSetInput: CreateSetInput,
    @Ctx() ctx: RequestContext
  ): Promise<Set> {
    // TODO - make sure user exercise exists before creating set
    const user = await User.findOne(ctx.req.session!.userId);
    const set = await Set.create({
      user: user,
      ...createSetInput
    }).save();
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
