const db = {
  ShoppingListItem: {
  }
};

const wait = () => new Promise(r => setTimeout(r, 1000));

const getItem = async (type, id) => {
  await wait();
  return {id, __type: type, ...db[type][id]};
}

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

const deleteItem = async (type, id) => {
  if (!db[type][id]) {
    throw new Error(`Object of type ${type} with id ${id} not found`);
  }
  const item = await getItem(type, id);
  delete db[type][id];
  return item;
}

const getList = async (type) => {
  await wait();
  const listObject = db[type];
  return Object.keys(listObject).map(id =>
    ({ id, __type: type, ...listObject[id] })
  )
}

module.exports = {
  getItem,
  editItem,
  createItem,
  deleteItem,
  getList
}
