This server package is built with the combined forces of:

Node,
Typescript,
TypeGraphQL,
TypeORM

These technologies allow us to use the same file, using decorators, to author
a GraphQL schema and a PostgresQL database schema simultaneously. A seperate version of this file exists for each entity within the entity folder.

The resolvers used to implement the GraphQL API for this server are also found seperated by entity. Each entity's resolvers can be found within it's corresponding resolvers folder.

In order to run this server yourself, you must:

- Be running a postgres service/daemon
- Have a postgres user & database that matches the config given to the createConnection function within the index.ts file
- Run yarn start

This will automatically create the tables defined by your schema if they don't already exist.
