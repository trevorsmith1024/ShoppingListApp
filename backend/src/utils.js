const { fromGlobalId, globalIdField, nodeInterface, nodeField } = require('./nodeUtils');
const fakeDatabase = require('./fakeDatabase');
module.exports = {
  typedDbResolver: (type) => (_, { id: globalId }) => {
    return fakeDatabase[type][fromGlobalId(globalId).id]
  }
}
