import graphql from 'babel-plugin-relay/macro';

import type {ShoppingListItem_item$key} from 'ShoppingList_list.graphql';

import React, { useState, useContext, useCallback } from 'react';
import {useFragment, useMutation} from 'react-relay';

import { Container, Typography, Box, Button, Checkbox, Modal } from '@mui/material'; import { PrimaryButton, TextButton, IconButton, borderStyles, centeredModalStyle, removeFromClientList } from './Utils';

import ShoppingListContext from './ShoppingListContext';
import { ShoppingListItemEditor } from './ShoppingListItemEditor';

function ShoppingListItem({item}) {
  const data = useFragment(
    graphql`
      fragment ShoppingListItem_item on ShoppingListItem {
        id
        name
        description
        purchased
        count
        ...ShoppingListItemEditor_item
      }
    `,
    item
  );

  const { id, name, description, purchased, count } = data;

  const [commit, isInFlight] = useMutation(graphql`
    mutation ShoppingListItemDeleteMutation($input: ID!) {
      deleteShoppingListItem(input: $input) { id }
    }
  `)

  const [commitPurchaseUpdate, purchaseUpdateIsInFlight] = useMutation(graphql`
    mutation ShoppingListItemTogglePurchasedMutation($input: EditShoppingListItemInput!) {
      editShoppingListItem(input: $input) { id purchased }
    }
  `)

  const setCurrentlyEditing = useContext(ShoppingListContext);
  const onClick = () => setCurrentlyEditing(data);

  const [deleteModalShowing, setDeleteModalShowing] = useState(false);
  const openModal = useCallback(() => setDeleteModalShowing(true));
  const closeModal = () => setDeleteModalShowing(false);

  const handlePurchasedCheckboxChanged = (e) => {
    commitPurchaseUpdate({
      variables: { input:
        { id, name, description, count, purchased: e.target.checked}
      }
    })
  }

  const submitDelete = useCallback(() => {
    commit({
      variables: { input: data.id },
      updater: removeFromClientList('deleteShoppingListItem'),
      onCompleted: closeModal
    })
  })

  return (
    <>
      <Box sx={{ display: 'flex', gap: 2.5, p: 2.5, mt: 2, ...borderStyles }}>
        <Checkbox checked={purchased} onChange={handlePurchasedCheckboxChanged}/>
        <Box sx={{ display: 'inline-block', flexGrow: 1 }}>
          <Typography variant='strong2' sx={{color: 'text.black'}}>
            {name}
          </Typography>
          <Typography variant='body2' sx={{color: 'grey.75'}}>{description}</Typography>
        </Box>
        <IconButton onClick={onClick}>
          <Box className="material-icons-outlined">edit</Box>
        </IconButton>
        <IconButton onClick={openModal}>
          <Box className="material-icons-outlined">delete</Box>
        </IconButton>
      </Box>
      <Modal open={deleteModalShowing} onClose={closeModal}>
        <Container sx={{...modalStyle, p: 4}}>
          <Typography variant='strong1' gutterBottom>
            Delete Item
          </Typography>
          <Typography variant='body2' sx={{color: 'text.secondary', flexGrow: 1}}>
            Are you sure you want to delete this item? This cannot be undone.
          </Typography>
          <Box sx={{display: 'flex', justifyContent: 'flex-end', gap: 2}}>
            <TextButton onClick={closeModal}> Cancel </TextButton>
            <PrimaryButton variant='contained' onClick={submitDelete}>
              Delete
            </PrimaryButton>
          </Box>
        </Container>
      </Modal>
    </>
  );
}

const modalStyle = {
  ...centeredModalStyle,
  width: 410,
  height: 240,
  borderRadius: 1,
}

export default ShoppingListItem;
