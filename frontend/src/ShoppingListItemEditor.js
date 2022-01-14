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
    mutation ShoppingListItemEditorEditMutation($input: EditShoppingListItemInput!) {
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
  const mutation = useMutation(graphql`
    mutation ShoppingListItemEditorCreateMutation($input: CreateShoppingListItemInput) {
      createShoppingListItem(input: $input){
        id
        name
        description
        count
      }
    }
  `) 

  //this would not have to be done manually if a connection was used
  const updater = (store, payload) => {
    const root = store.getRoot();
    const viewer = root.getLinkedRecord('viewer')
    const newNode = store.getRootField('createShoppingListItem');
    const newShoppingList =
      [ ...viewer.getLinkedRecords('shoppingList'), newNode ]
    viewer.setLinkedRecords(newShoppingList, 'shoppingList')
  }

  return <ShoppingListItemModal mutation={mutation} updater={updater}/>
}

function ShoppingListItemModal({mutation, updater, initialData}) {
  const [commit, isInFlight] = mutation;

  const onSubmit = useCallback(input => {
    commit({
      variables: { input },
      updater
    })
  })

  if (isInFlight) {
    return <div>loading</div>
  }

  return <ShoppingListItemForm
    initialData={initialData}
    onSubmit={onSubmit}/>
}
