import graphql from 'babel-plugin-relay/macro';

import type {ShoppingList_list$key} from 'ShoppingList_list.graphql';

import React from 'react';
import {useFragment} from 'react-relay';

type Props = {
  viewer: ShoppingList_list$key,
};

function ShoppingList(props: Props) {
  const data = useFragment(
    graphql`
      fragment ShoppingList_list on Viewer {
        shoppingList {
          name
          description
          count
        }
      }
    `,
    props.viewer
  );

  return (
    <>
      <h1>ShoppingList: {JSON.stringify(data, null, 2)}</h1>
    </>
  );
}

export default ShoppingList;
