const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID, } = require('graphql');

const { fromGlobalId, globalIdField, nodeInterface, nodeField } = require('./nodeUtils');

const { editItem } = require('./fakeDatabase');

const shoppingListItemTypeName = 'ShoppingListItem';

const shoppingListItemFields = {
  id: globalIdField(),
  name: { type: new GraphQLNonNull(GraphQLString) },
  description: { type: new GraphQLNonNull(GraphQLString) },
  count: { type: new GraphQLNonNull(GraphQLInt) },
}

const shoppingListItemType = new GraphQLObjectType({
  name: shoppingListItemTypeName,
  fields: shoppingListItemFields,
  interfaces: [nodeInterface]
});

const editShoppingListItemInput = new GraphQLInputObjectType({
  name: 'EditShoppingListItemInput',
  fields: { ...shoppingListItemFields, id: { type: new GraphQLNonNull(GraphQLID) }}
})

const mutations = {
  editShoppingListItem: {
    type: new GraphQLNonNull(shoppingListItemType),
    args: {
      input: { type: editShoppingListItemInput }
    },
    resolve: (ctx, { input: { id, ...values } }) => {
      return editItem(shoppingListItemTypeName, fromGlobalId(id).id, values);
    }
  }
}

module.exports = {
  shoppingListItemTypeName,
  shoppingListItemType,
  editShoppingListItemInput,
  mutations
}
