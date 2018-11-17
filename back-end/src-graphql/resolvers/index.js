import { mergeResolvers } from 'merge-graphql-schemas';
import messageResolver from './message.resolvers';

const resolvers = [
  messageResolver,
];

export default mergeResolvers(resolvers);
