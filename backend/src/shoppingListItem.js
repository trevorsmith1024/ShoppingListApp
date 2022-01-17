const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLID, } = require('graphql');

const { fromGlobalId, globalIdField, nodeInterface, nodeField } = require('./nodeUtils');

const { editItem, createItem, deleteItem } = require('./fakeDatabase');

const shoppingListItemTypeName = 'ShoppingListItem';

const shoppingListItemFields = {
  id: globalIdField(),
  name: { type: new GraphQLNonNull(GraphQLString) },
  description: { type: new GraphQLNonNull(GraphQLString) },
  count: { type: new GraphQLNonNull(GraphQLInt) },
  purchased: { type: new GraphQLNonNull(GraphQLBoolean) },
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

const createShoppingListItemInput = new GraphQLInputObjectType({
  name: 'CreateShoppingListItemInput',
  fields: () => {
    const { id, ...createShoppingListItemFields } = shoppingListItemFields;
    return createShoppingListItemFields;
  }
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
  },
  createShoppingListItem: {
    type: new GraphQLNonNull(shoppingListItemType),
    args: {
      input: { type: createShoppingListItemInput }
    },
    resolve: (ctx, { input }) => {
      return createItem(shoppingListItemTypeName, input);
    }
  },
  deleteShoppingListItem: {
    type: new GraphQLNonNull(shoppingListItemType),
    args: {
      input: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (ctx, { input }) => {
      return deleteItem(shoppingListItemTypeName, fromGlobalId(input).id);
    }
  },
}

module.exports = {
  shoppingListItemTypeName,
  shoppingListItemType,
  editShoppingListItemInput,
  mutations
}
