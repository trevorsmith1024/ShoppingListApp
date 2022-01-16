const db = {
  ShoppingListItem: {
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

const createItem = (type, values) => {
  const dataSet = db[type];
  const id = Object.keys(dataSet).length;
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
  createItem,
  getList
}
