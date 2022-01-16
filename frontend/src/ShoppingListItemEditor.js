import graphql from 'babel-plugin-relay/macro';

import React, { useCallback, useContext } from 'react';
import {useFragment, useMutation} from 'react-relay';

import ShoppingListContext from './ShoppingListContext';
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

  return <ShoppingListItemControl mutation={mutation} initialData={data}/>
}

export function ShoppingListItemCreator() {
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

  return <ShoppingListItemControl mutation={mutation} updater={updater}/>
}

function ShoppingListItemControl({mutation, updater, initialData}) {
  const [commit, isInFlight] = mutation;

  const setCurrentlyEditing = useContext(ShoppingListContext);
  const onCompleted = () => setCurrentlyEditing(false);

  const onSubmit = useCallback(input => {
    commit({
      variables: { input },
      updater,
      onCompleted
    })
  })

  if (isInFlight) {
    return <div>loading</div>
  }

  return <ShoppingListItemForm
    initialData={initialData}
    onSubmit={onSubmit}
    onCancel={onCompleted}/>
}

