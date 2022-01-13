const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema } = require('graphql');
const { fromGlobalId, globalIdField, nodeInterface, nodeField } = require('./nodeUtils');

const shoppingListItemFields = {
  id: globalIdField(),
  name: { type: new GraphQLNonNull(GraphQLString) },
  description: { type: new GraphQLNonNull(GraphQLString) },
  count: { type: new GraphQLNonNull(GraphQLInt) },
}

const { id: _, newShoppingListItemFields } = shoppingListItemFields;

const shoppingListItemType = new GraphQLObjectType({
  name: 'ShoppingListItem',
  fields: shoppingListItemFields,
  interfaces: [nodeInterface]
});

const editShoppingListItemInput = new GraphQLInputObjectType({
  name: 'EditShoppingListItemInput',
  fields: shoppingListItemFields
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
