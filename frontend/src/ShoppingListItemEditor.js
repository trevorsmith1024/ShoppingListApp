import graphql from 'babel-plugin-relay/macro';

import React, { useCallback, useContext } from 'react';
import {useFragment, useMutation} from 'react-relay';

import { Typography, Container, Box, Button, Modal } from '@mui/material';

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

  return <ShoppingListItemModal mutation={mutation} initialData={data}/>
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

  return <ShoppingListItemModal mutation={mutation} updater={updater}/>
}

function ShoppingListItemModal({mutation, updater, initialData}) {
  const [commit, isInFlight] = mutation;

  const setCurrentlyEditing = useContext(ShoppingListContext);

  const onSubmit = useCallback(input => {
    commit({
      variables: { input },
      updater,
      onCompleted: () => {
        setCurrentlyEditing(false);
      }
    })
  })

  if (isInFlight) {
    return <div>loading</div>
  }

  return <Modal open={true} onClose={() => setCurrentlyEditing(false)}>
    <Box sx={modalStyle}>
      <ShoppingListItemForm
        initialData={initialData}
        onSubmit={onSubmit}/>
    </Box>
  </Modal>
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
