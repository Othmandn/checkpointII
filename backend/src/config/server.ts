import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { CountryResolver } from "../resolvers/country.resolvers";
import { GraphQLError, GraphQLFormattedError } from "graphql";
import * as dotenv from "dotenv";
import { dataSource } from "./db";
dotenv.config();

export const createServer = async (): Promise<ApolloServer> => {
  await dataSource.initialize();
  const schema = await buildSchema({
    resolvers: [CountryResolver],
    validate: { forbidUnknownValues: false },
  });

  return new ApolloServer({
    schema,
    formatError: (error: GraphQLFormattedError) => {
      return error;
    },
  });
};
