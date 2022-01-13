import graphql from 'babel-plugin-relay/macro';

import type {ShoppingListItem_item$key} from 'ShoppingList_list.graphql';

import React, { useState } from 'react';
import {useFragment} from 'react-relay';

import ShoppingListItemEditor from './ShoppingListItemEditor';

type Props = {
  item: ShoppingListItem_item$key
};

function ShoppingListItem(props: Props) {
  const data = useFragment(
    graphql`
      fragment ShoppingListItem_item on ShoppingListItem {
        name
        description
        count
        ...ShoppingListItemEditor_item
      }
    `,
    props.item
  );

  const [editing, setEditing] = useState(false);

  const { name, description, count } = data;

  return (
    <>
      <div>Item: {name}</div>
      <div>Description: {description}</div>
      <div>Count: {count}</div>
      <button onClick={() => setEditing(!editing)}>
        Edit
      </button>
      {editing && (
        <ShoppingListItemEditor item={data}/>
      )}
    </>
  );
}

export default ShoppingListItem;
