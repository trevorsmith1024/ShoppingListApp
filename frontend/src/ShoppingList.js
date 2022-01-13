import graphql from 'babel-plugin-relay/macro';

import type {ShoppingList_list$key} from 'ShoppingList_list.graphql';

import React from 'react';
import {useFragment} from 'react-relay';

import ShoppingListItem from './ShoppingListItem';

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

  return (
    <>
      <h1>ShoppingList</h1>
      {
        data.shoppingList.map(item =>
          <ShoppingListItem key={item.id} item={item}/>
        )
      }
    </>
  );
}

export default ShoppingList;
