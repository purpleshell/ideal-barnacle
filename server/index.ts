const { ApolloServer, gql } = require("apollo-server");

const lifts = [
  {
    liftName: "Bench Press",
    targetMuscles: ["pecs", "triceps"]
  },
  {
    liftName: "Deadlift",
    targetMuscles: ["glutes", "hams"]
  }
];

const typeDefs = gql`
  type Lift {
    liftName: String
    targetMuscles: [String]
  }

  type Query {
    lifts: [Lift]
  }
`;

const resolvers = {
  Query: {
    lifts: () => lifts
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(` Server ready at ${url}`);
});
