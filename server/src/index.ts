import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema, formatArgumentValidationError } from "type-graphql";
import { createConnection } from "typeorm";

import { CreateExerciseResolver } from "./entity/exercise/resolvers/CreateExercise";
import { RegisterUserResolver } from "./entity/user/resolvers/RegisterUser";
import cors = require("cors");

const main = async () => {
  await createConnection({
    type: "postgres",
    url:
      process.env.DATABASE_URL ||
      "postgres://postgres:postgres@localhost/ideal-barnacle-test",
    entities: ["src/entity/**/*.ts"]
  });

  const schema = await buildSchema({
    resolvers: [CreateExerciseResolver, RegisterUserResolver]
  });
  const server = new ApolloServer({
    schema,
    formatError: formatArgumentValidationError
  });

  const app = Express();

  var whitelist = [
    "http://localhost:3000/",
    "https://overload-client.herokuapp.com/"
  ];

  app.use(
    cors({
      credentials: true,
      origin: function(origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      }
    })
  );

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(
      ` Server ready at http://localhost:${PORT}/graphql process.env: `,
      process.env
    );
  });
};

main();