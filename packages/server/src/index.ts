import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
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
    synchronize: true,
    // attempt to fix db error by dropping schema
    // TODO - Find another way
    dropSchema: false,
    // dropSchema: process.env.NODE_ENV === "development" ? true : false
  });

  const schema = await buildSchema({
    resolvers: [__dirname + "entity/**/resolvers/*.ts"],
    emitSchemaFile: false,
  });
  const server = new ApolloServer({
    schema,
    context: ({ req }: any) => ({ req }),
  });

  const app = Express();

  const RedisStore = connectRedis(session);
  const redis = new Redis(process.env.REDIS_URL);

  app.use(
    session({
      store:
        process.env.NODE_ENV === "production"
          ? new RedisStore({
              url: process.env.REDIS_URL,
            })
          : new RedisStore({
              client: redis as any,
            }),
      name: "userStore",
      // TODO - put sensitive config data in env vars
      secret: "put me in env file",
      resave: true,
      saveUninitialized: false,
      proxy: true,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" ? true : false,
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years	        maxAge: 1000 * 60 * 60 * 24 * 7 * 365 // 7 years
      },
    })
  );

  server.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin:
        process.env.NODE_ENV === "production"
          ? "https://lucid-wing-221f73.netlify.com"
          : "http://localhost:3000",
    },
  });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(
      ` Server rady at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
};

main();
