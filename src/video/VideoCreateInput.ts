import { Field, InputType } from "type-graphql";

@InputType()
export class VideoCreateInput {
    @Field()
    title: string;

    @Field({ nullable: true })
    description?: string;

    @Field()
    category: string;
}