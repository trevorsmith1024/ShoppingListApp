import graphql from 'babel-plugin-relay/macro';

import React, { useCallback } from 'react';
import {useFragment, useMutation} from 'react-relay';

import ShoppingListItemForm from './ShoppingListItemForm';

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

  const handleSubmit = useCallback(formData => {
    commit({
      variables: {
        input: {
          ...formData
        }
      }
    })
  })



  if (isInFlight) {
    return <div>loading</div>
  }

  return <div>
    <pre style={{textAlign: 'left'}}>
      {JSON.stringify(data, null, 2)}
    </pre>
    <ShoppingListItemForm initialData={data} onSubmit={handleSubmit}/>
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
