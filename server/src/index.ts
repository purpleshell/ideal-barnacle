import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
import Express from "express";
import session from "express-session";
import Redis from "ioredis";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";

const main = async () => {
  await createConnection({
    type: "postgres",
    url:
      process.env.DATABASE_URL ||
      "postgres://postgres:postgres@localhost/ideal-barnacle-test",
    entities: ["src/entity/**/*.ts"],
    synchronize: process.env.NODE_ENV === "development" ? true : false,
    dropSchema: process.env.NODE_ENV === "development" ? true : false
  });

  const schema = await buildSchema({
    resolvers: [__dirname + "entity/**/resolvers/*.ts"],
    emitSchemaFile: process.env.NODE_ENV === "development" ? true : false
  });
  const server = new ApolloServer({
    schema,
    context: ({ req }: any) => ({ req })
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

  const RedisStore = connectRedis(session);
  const redis = new Redis();

  app.use(
    session({
      store: new RedisStore({
        client: redis as any
      }),
      name: "userStore",
      // TODO - put sensitive config data in env vars
      secret: "put me in emv file",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365
      }
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
