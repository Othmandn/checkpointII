import { Country } from "../entities/country";
import { CountriesInputs } from "../inputs/countries.inputs";

export const getAllCountries = async (): Promise<Country[]> => {
  try {
    return await Country.find();
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    throw new Error("Failed to fetch countries");
  }
};

export const getCountryByCode = async (
  countryCode: string
): Promise<Country> => {
  try {
    return await Country.findOneByOrFail({ countryCode });
  } catch (error) {
    console.error("Failed to fetch country:", error);
    throw new Error("Failed to fetch country");
  }
};

export async function createCountry(
  countryData: CountriesInputs
): Promise<Country> {
  try {
    const country = new Country();
    country.name = countryData.name;
    country.countryCode = countryData.countryCode;
    country.flag = countryData.flag;
    return await country.save();
  } catch (error) {
    console.error("Failed to save country:", error);
    throw new Error("Failed to save country");
  }
}
