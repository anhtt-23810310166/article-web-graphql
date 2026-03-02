import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const startServer = async () => {
  dotenv.config();

  const app: Express = express();
  const port: number = Number(process.env.PORT);

  database.connectDatabase();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use("/graphql", express.json(), expressMiddleware(server));

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};  

startServer();

