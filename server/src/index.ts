import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import Express from "express";
import "reflect-metadata";
import { buildSchema, formatArgumentValidationError } from "type-graphql";
import { createConnection } from "typeorm";

const main = async () => {
  await createConnection({
    type: "postgres",
    url:
      process.env.DATABASE_URL ||
      "postgres://postgres:postgres@localhost/ideal-barnacle-test",
    entities: ["src/entity/**/*.ts"],
    synchronize: true
  });

  const schema = await buildSchema({
    resolvers: [__dirname + "entity/**/resolvers/*.ts"]
  });
  const server = new ApolloServer({
    schema,
    formatError: formatArgumentValidationError
  });

  const app = Express();

  app.use(
    //
    // The below cors config is working beautifully as of 2-19-19
    //
    cors({
      credentials: true,
      origin:
        process.env.NODE_ENV === "production"
          ? "https://overload-client.herokuapp.com"
          : "http://localhost:3000"
    })
  );

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(
      ` Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
};

main();
