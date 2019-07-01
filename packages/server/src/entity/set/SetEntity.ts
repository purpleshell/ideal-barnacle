import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Exercise } from "../exercise/ExerciseEntity";

@ObjectType()
@Entity()
export class Set extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Field({ description: "Whether the set was a working set or a warmup set" })
  @Column()
  warmUp: boolean;

  @Field({
    description: "Recorded mass of the resistance for each rep in the set"
  })
  @Column()
  weight: number;

  @Field({
    description: "Whether the resistance was measured in kilos or pounds"
  })
  @Column()
  systemOfMeasurement: string;

  @Field({ description: "Number of reps performed in the set" })
  @Column({ type: "int" })
  reps: number;

  @Field({
    description:
      "A 5-10 score denoting how many reps were 'left in the tank' for the performer. A score of 5 represents that the performer of the set could have done at least 5 more reps. A score of 6 represents 4 reps, etc. A score of 10 denotes that the performer could do no more reps. A score of 10+ can be used to show the performer failed on the last rep, who's count should then be recorded in the reps field."
  })
  @Column()
  rpe: number;

  @Field({ description: "Date set was performed" })
  @Column()
  date: Date;

  @Field({
    description:
      "A number denoting the chronological order in which the sets were performed. Resets each day",
    nullable: true
  })
  @Column({ nullable: true })
  order?: number;

  @Field(() => Exercise, { description: "The exercise type of the set" })
  @ManyToOne(() => Exercise)
  exercise: Exercise;

  // @Field({ description: "Name of the exercise of which the set was performed" })
  // @Column()
  // exerciseName: string;

  // @Column({ nullable: true })
  // userId: string;

  // @Field(() => User, { description: "The user whom created the set" })
  // @ManyToOne(() => User)
  // user: User;
}
