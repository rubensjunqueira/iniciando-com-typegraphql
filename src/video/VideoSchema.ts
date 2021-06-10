import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("videos")
@ObjectType()
export class VideoSchema extends BaseEntity {
    @PrimaryColumn()
    @Field(type => ID)
    id?: string;

    @Column()
    @Field()
    title: string;

    @Column()
    @Field({ nullable: true })
    description?: string;

    @Column()
    @Field()
    category: string;

    constructor() {
        super();
        if (!this.id) {
            this.id = uuid();
        }
    }
}