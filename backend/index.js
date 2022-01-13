const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema } = require('graphql');
const { fromGlobalId, globalIdField, nodeInterface, nodeField } = require('./src/nodeUtils');

const { shoppingListItemType, mutations: shoppingListMutations } = require('./src/shoppingListItem');
const { getList } = require('./src/fakeDatabase');

const viewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: {
    shoppingList: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(shoppingListItemType))),
      resolve: (ctx, args) => getList('ShoppingListItem')
    },
  }
})

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    node: nodeField,
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
