import { Field, InputType } from "type-graphql";

@InputType()
export class VideoUpdateInput {
    @Field({ nullable: true })
    title?: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    category?: string;
}