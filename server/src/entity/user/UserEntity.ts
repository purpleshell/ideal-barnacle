import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  // optional field for greeting
  @Field()
  @Column()
  userName: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
