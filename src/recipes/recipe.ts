import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Recipe {
    @Field(() => String)
    public id: string;

    @Field(() => String)
    public title: string;
}
