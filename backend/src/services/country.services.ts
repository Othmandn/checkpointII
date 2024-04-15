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
