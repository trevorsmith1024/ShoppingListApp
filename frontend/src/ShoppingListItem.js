import graphql from 'babel-plugin-relay/macro';

import type {ShoppingListItem_item$key} from 'ShoppingList_list.graphql';

import React from 'react';
import {useFragment} from 'react-relay';

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
      }
    `,
    props.item
  );

  return (
    <>
      <p>Item: {JSON.stringify(data, null, 2)}</p>
    </>
  );
}

export default ShoppingListItem;
