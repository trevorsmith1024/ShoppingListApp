const db = {
  ShoppingListItem: {
    0: {
      name: 'Item 1',
      description: 'Most important thing',
      count: 1
    }
  }
};

module.exports = {
  getItem: (type, id) =>
    ({id, __type: type, ...db[type][id]}),
  getList: (type) => {
    const listObject = db[type];
    return Object.keys(listObject).map(id =>
      ({ id, __type: type, ...listObject[id] })
    )
  }
}
