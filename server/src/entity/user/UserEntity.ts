import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

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
