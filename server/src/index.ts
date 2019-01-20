import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema, formatArgumentValidationError } from "type-graphql";
import { createConnection } from "typeorm";

// import { User } from "./entity/User";
import { CreateExerciseResolver } from "./entity/exercise/resolvers/CreateExercise";
import { RegisterUserResolver } from "./entity/user/resolvers/RegisterUser";

const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [CreateExerciseResolver, RegisterUserResolver]
  });
  const server = new ApolloServer({
    schema,
    formatError: formatArgumentValidationError
  });

  const app = Express();

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
