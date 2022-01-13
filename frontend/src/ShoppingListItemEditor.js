import graphql from 'babel-plugin-relay/macro';

import React, { useCallback } from 'react';
import {useFragment, useMutation} from 'react-relay';

import ShoppingListItemForm from './ShoppingListItemForm';

export function ShoppingListItemEditor({item}) {
  const data = useFragment(
    graphql`
      fragment ShoppingListItemEditor_item on ShoppingListItem {
        id
        name
        description
        count
      }
    `,
    item
  );

  const mutation = useMutation(graphql`
    mutation ShoppingListItemEditorMutation($input: EditShoppingListItemInput!) {
      editShoppingListItem(input: $input) {
        name
        description
        count
      }
    }
  `)

  return <ShoppingListItemModal mutation={mutation} initialData={data} />
}

export function ShoppingListItemCreator(props) {
  //create mutation
  //const [commit, isInFlight] = useMutation(graphql` `) 

  return <ShoppingListItemModal/>
}

function ShoppingListItemModal(props) {
  const [commit, isInFlight] = props.mutation;

  const onSubmit = useCallback(input => {
    commit({ variables: { input } })
  })

  if (isInFlight) {
    return <div>loading</div>
  }

  return <ShoppingListItemForm
    initialData={props.initialData}
    onSubmit={onSubmit}/>
}
