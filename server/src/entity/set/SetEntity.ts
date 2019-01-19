import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Set extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  //  @Field()
  //  @Column()
  //  exerciseName: string;

  @Field()
  @Column()
  warmUp: boolean;

  @Field()
  @Column()
  weight: number;

  @Field()
  @Column()
  systemOfMeasurement: string;

  @Field()
  @Column()
  reps: number;

  @Field()
  @Column()
  rpe: number;
}
