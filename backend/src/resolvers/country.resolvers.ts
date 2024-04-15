import { Arg, Query, Resolver } from "type-graphql";
import { Country } from "../entities/country";
import { CountriesInputs } from "../inputs/countries.inputs";
import * as countryService from "../services/country.services";
@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  async getAllCountries(): Promise<Country[]> {
    try {
      return await countryService.getAllCountries();
    } catch (error) {
      console.error(`Error while fetching countries: ${error}`);
      return [];
    }
  }
}