import graphql from 'babel-plugin-relay/macro';

import type {ShoppingList_list$key} from 'ShoppingList_list.graphql';

import React, {useState} from 'react';
import {useFragment} from 'react-relay';

import ShoppingListItem from './ShoppingListItem';
import { ShoppingListItemCreator } from './ShoppingListItemEditor';

type Props = {
  viewer: ShoppingList_list$key,
};

function ShoppingList(props: Props) {
  const data = useFragment(
    graphql`
      fragment ShoppingList_list on Viewer {
        shoppingList {
          id
          ...ShoppingListItem_item
        }
      }
    `,
    props.viewer
  );

  const [newItemModalOpen, setNewItemModalOpen] = useState(false);

  return (
    <>
      <h1>ShoppingList</h1>
      {
        data.shoppingList.map(item =>
          <ShoppingListItem key={item.id} item={item}/>
        )
      }
      <button onClick={() => setNewItemModalOpen(!newItemModalOpen)}>
        New item
      </button>
      {
        newItemModalOpen && (
          <ShoppingListItemCreator />          
        )
      }
    </>
  );
}

export default ShoppingList;
