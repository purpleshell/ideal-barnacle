import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Exercise } from "../exercise/ExerciseEntity";
import { Set } from "../set/SetEntity";

@ObjectType({ description: "The user model" })
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  // (optional?) field for greeting
  @Field({ description: "The name of the user" })
  @Column()
  username: string;

  @Field({ description: "The email address used for account operations" })
  @Column({ unique: true })
  email: string;

  @Field(() => [Set], {
    description: "List containing all of the user's recorded exercise sets",
    nullable: true
  })
  @OneToMany(() => Set, set => set.user)
  sets: Set[];

  @Field(() => [Exercise], {
    description: "List containing all of the user's created exercises",
    nullable: true
  })
  @OneToMany(() => Exercise, exercise => exercise.user)
  exercises: Exercise[];

  @Column()
  password: string;
}
