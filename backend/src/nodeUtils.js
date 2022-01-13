const { nodeDefinitions, fromGlobalId, globalIdField } = require('graphql-relay');

const { getItem } = require('./fakeDatabase');

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    return getItem(type, id);
  },
  ({ __type }) => __type,
);

module.exports = {
  fromGlobalId,
  globalIdField,
  nodeInterface,
  nodeField,
}
