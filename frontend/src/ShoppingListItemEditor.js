import graphql from 'babel-plugin-relay/macro';

import React from 'react';
import {useFragment, useMutation} from 'react-relay';

export default function ShoppingListItemEditor(props) {
  const data = useFragment(
    graphql`
      fragment ShoppingListItemEditor_item on ShoppingListItem {
        name
        description
        count
      }
    `,
    props.item
  );

  return <div>
    {JSON.stringify(data, null, 2)}
  </div>
}
