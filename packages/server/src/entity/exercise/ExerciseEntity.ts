import { TargetMuscle } from "@ideal-barnacle/common";
import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { User } from "../user/UserEntity";

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

  @Field({ description: "Name of the exercise" })
  @Column("text")
  exerciseName: string;

  @Field(() => TargetMuscle, {
    description: "List containing all of the exercise's involved muscles",
    nullable: false
  })
  @Column("enum", { enum: TargetMuscle, array: true })
  targetMuscles: TargetMuscle[];

  @Field(() => User, { description: "User whom created the exercise" })
  @ManyToOne(() => User)
  user: User;
}
