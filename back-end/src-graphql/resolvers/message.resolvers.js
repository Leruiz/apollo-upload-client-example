export default {
  Query: {
    getMessage: (root) => {
      // should check args
      return {message: 'Graphql request success!'};
    }
  }
};
