const { nodeDefinitions, fromGlobalId, globalIdField } = require('graphql-relay');

const fakeDatabase = require('./fakeDatabase');

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type: __type, id } = fromGlobalId(globalId);
    return { __type, ...fakeDatabase[__type][id] };
  },
  ({ __type }) => __type,
);

module.exports = {
  fromGlobalId,
  globalIdField,
  nodeInterface,
  nodeField,
}
