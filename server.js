const { ApolloServer } = require('apollo-server');
const { typeDefs } = require("./schema.graphql");
const { resolvers } = require("./Old Practice/resolvers.js");

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});