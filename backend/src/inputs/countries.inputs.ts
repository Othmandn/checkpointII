import { Field, InputType } from "type-graphql";
import { Length, IsOptional } from "class-validator";
@InputType()
export class CountriesInputs {
  @Field()
  name: string;

  @Field()
  @Length(2)
  countryCode: string;

  @Field()
  @Length(1, 20)
  flag: string;
}
