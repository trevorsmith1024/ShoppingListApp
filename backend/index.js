const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');
const { nodeDefinitions, fromGlobalId, globalIdField } = require('graphql-relay');

const utils = {
  typedDbResolver: (type) => (_, { id: globalId }) => {
    return fakeDatabase[type][fromGlobalId(globalId).id]
  }
}

// Maps id to User object
const fakeDatabase = {
  User: {
    'a': {
      id: 'a',
      name: 'alice',
    },
    'b': {
      id: 'b',
      name: 'bob',
    },
  }
};

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    return fakeDatabase[type][id];
  },
  //infer graphql type from returned object
  (obj) => {
    //there are only userTypes right now
    return 'User';
  },
);

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: globalIdField(),
    name: { type: GraphQLString },
  },
  interfaces: [nodeInterface]
});

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    node: nodeField,
    user: {
      type: userType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: utils.typedDbResolver('User')
    },
  }
});

const schema = new GraphQLSchema({query: queryType});

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
