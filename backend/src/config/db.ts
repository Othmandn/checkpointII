import { DataSource } from "typeorm";
import { Country } from "../entities/country";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Country],
  synchronize: true,
  logging: false,
});
