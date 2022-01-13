const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema } = require('graphql');
const { fromGlobalId, globalIdField, nodeInterface, nodeField } = require('./nodeUtils');

const shoppingListItemType = new GraphQLObjectType({
  name: 'ShoppingListItem',
  fields: {
    id: globalIdField(),
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    count: { type: GraphQLInt },
  },
  interfaces: [nodeInterface]
});

const editShoppingListItemInput = new GraphQLInputObjectType({
  name: 'EditShoppingListItemInput',
  fields: {

  }
})

const mutations = {
  editShoppingListItem: {
    type: 'ShoppingListItem',
    args: {
      input: { type: editShoppingListItemInput }
    },
    resolve: (ctx, { input }) => {
    }
  }
}

module.exports = {
  shoppingListItemType,
  editShoppingListItemInput,
  mutations
}
