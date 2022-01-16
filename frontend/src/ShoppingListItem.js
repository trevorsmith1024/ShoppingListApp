import graphql from 'babel-plugin-relay/macro';

import type {ShoppingListItem_item$key} from 'ShoppingList_list.graphql';

import React, { useContext } from 'react';
import {useFragment} from 'react-relay';

import ShoppingListContext from './ShoppingListContext';
import { ShoppingListItemEditor } from './ShoppingListItemEditor';

function ShoppingListItem({item}) {
  const data = useFragment(
    graphql`
      fragment ShoppingListItem_item on ShoppingListItem {
        name
        description
        count
        ...ShoppingListItemEditor_item
      }
    `,
    item
  );

  const setCurrentlyEditing = useContext(ShoppingListContext);
  const onClick = () => setCurrentlyEditing(data);

  const { name, description, count } = data;

  return (
    <>
      <div>Item: {name}</div>
      <div>Description: {description}</div>
      <div>Count: {count}</div>
      <button onClick={onClick}>
        Edit
      </button>
    </>
  );
}

export default ShoppingListItem;
