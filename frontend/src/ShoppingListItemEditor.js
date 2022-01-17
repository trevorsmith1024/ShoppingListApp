import graphql from 'babel-plugin-relay/macro';

import React, { useCallback, useContext } from 'react';
import {useFragment, useMutation} from 'react-relay';

import { addToClientList } from './Utils';

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
        purchased
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
        purchased
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
        purchased
      }
    }
  `) 

  //this would not have to be done manually if a connection was used
  const updater = addToClientList('createShoppingListItem')

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

