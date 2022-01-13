const db = {
  ShoppingListItem: {
    0: {
      name: 'Item 1',
      description: 'Most important thing',
      count: 1
    }
  }
};

const getItem = (type, id) =>
  ({id, __type: type, ...db[type][id]})

const editItem = (type, id, values) => {
  if (!db[type][id]) {
    throw new Error(`Object of type ${type} with id ${id} not found`);
  }
  db[type][id] = values;
  return getItem(type, id);
}

const getList = (type) => {
  const listObject = db[type];
  return Object.keys(listObject).map(id =>
    ({ id, __type: type, ...listObject[id] })
  )
}

module.exports = {
  getItem,
  editItem,
  getList
}
