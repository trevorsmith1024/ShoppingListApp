const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLSchema } = require('graphql');
const utils = require('./src/utils');
const { fromGlobalId, globalIdField, nodeInterface, nodeField } = require('./src/nodeUtils');

const { shoppingListItemType, mutations: shoppingListMutations } = require('./src/shoppingListItem');

const fakeDatabase = require('./src/fakeDatabase');

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


const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...shoppingListMutations
  }
})

const schema = new GraphQLSchema({query: queryType});

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
