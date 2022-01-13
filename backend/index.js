const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLSchema } = require('graphql');
const { nodeDefinitions, fromGlobalId, globalIdField } = require('graphql-relay');

const utils = {
  typedDbResolver: (type) => (_, { id: globalId }) => {
    return fakeDatabase[type][fromGlobalId(globalId).id]
  }
}

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
  },
  ShoppingList: [{
    id: 0,
    name: 'Item 1',
    description: 'Most important thing',
    count: 1
  }]
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

const shoppingListItemType = new GraphQLObjectType({
  name: 'ShoppingListItem',
  fields: {
    id: globalIdField(),
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    count: { type: GraphQLInt },
  }
});

const viewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: {
    shoppingList: {
      type: new GraphQLList(shoppingListItemType),
      resolve: (ctx, args) => {
        return fakeDatabase.ShoppingList;
      }
    },
  }
})

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
    viewer: {
      type: viewerType,
      resolve: () => ({})
    }
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
