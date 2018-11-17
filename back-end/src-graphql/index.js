import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: error => {
    console.error(error);
    return new Error('Internal server error');
  },
});

export default server;
