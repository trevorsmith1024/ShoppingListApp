import graphql from 'babel-plugin-relay/macro';

import React from 'react';
import {useFragment, useMutation} from 'react-relay';

export default function ShoppingListItemEditor(props) {
  const data = useFragment(
    graphql`
      fragment ShoppingListItemEditor_item on ShoppingListItem {
        id
        name
        description
        count
      }
    `,
    props.item
  );

  const [commit, isInFlight] = useMutation(graphql`
    mutation ShoppingListItemEditorMutation($input: EditShoppingListItemInput!) {
      editShoppingListItem(input: $input) {
        name
        description
        count
      }
    }
  `)

  if (isInFlight) {
    return <div>loading</div>
  }

  return <div>
    {JSON.stringify(data, null, 2)}
    <button
      onClick={() => {
        commit({
          variables: {
            input: {
              ...data,
              count: data.count * 2
            }
          }
        })
      }}
    >
      Double
    </button>
  </div>
}
