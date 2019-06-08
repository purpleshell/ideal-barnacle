import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TargetMuscle {
  Traps = "Traps",
  SideDelts = "Delts",
  FrontDelts = "Front Delts",
  RearDelts = "Rear Delts",
  Chest = "Chest",
  Lats = "Lats",
  Biceps = "Biceps",
  Triceps = "Triceps",
  Abs = "Abs",
  Glutes = "Glutes",
  Hamstrings = "Hamstrings",
  Quads = "Quads"
}

registerEnumType(TargetMuscle, {
  name: "TargetMuscle",
  description: "Main skeletal muscle involved in the exercise"
});

@ObjectType()
@Entity()
export class Exercise extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column("text", { unique: true })
  exerciseName: string;

  @Field(() => TargetMuscle, {
    description: "List containing all of the exercise's involved muscles",
    nullable: false
  })
  @Column("enum", { enum: TargetMuscle, array: true })
  targetMuscles: TargetMuscle[];
}
