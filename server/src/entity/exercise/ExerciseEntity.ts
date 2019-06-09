import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TargetMuscle } from "./modules/TargetMuscles";

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
