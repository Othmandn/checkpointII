import { Arg, Query, Resolver, Mutation } from "type-graphql";
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

  @Query(() => Country)
  async getCountryByCode(
    @Arg("countryCode") countryCode: string
  ): Promise<Country | string> {
    try {
      return await countryService.getCountryByCode(countryCode);
    } catch (error) {
      console.error(`Error while fetching country: ${error}`);
      return "no country found";
    }
  }

  @Mutation(() => Country)
  async addCountry(
    @Arg("countryData") countryData: CountriesInputs
  ): Promise<Country | string> {
    try {
      return await countryService.createCountry(countryData);
    } catch (error) {
      console.error(`Error while creating country: ${error}`);
      return "no country created";
    }
  }
}
