import graphql from 'babel-plugin-relay/macro';

import type {ShoppingListItem_item$key} from 'ShoppingList_list.graphql';

import React, { useContext } from 'react';
import {useFragment} from 'react-relay';

import { Typography, Box, Button, Checkbox } from '@mui/material';
import { IconButton, borderStyles } from './Utils';

import ShoppingListContext from './ShoppingListContext';
import { ShoppingListItemEditor } from './ShoppingListItemEditor';

function ShoppingListItem({item}) {
  const data = useFragment(
    graphql`
      fragment ShoppingListItem_item on ShoppingListItem {
        name
        description
        ...ShoppingListItemEditor_item
      }
    `,
    item
  );

  const setCurrentlyEditing = useContext(ShoppingListContext);
  const onClick = () => setCurrentlyEditing(data);

  const { name, description } = data;

  return (
    <Box sx={{ display: 'flex', gap: 2.5, p: 2.5, mt: 2, ...borderStyles }}>
      <Checkbox/>
      <Box sx={{ display: 'inline-block', flexGrow: 1 }}>
        <Typography variant='strong2' sx={{color: 'text.black'}}>
          {name}
        </Typography>
        <Typography variant='body2' sx={{color: 'grey.75'}}>{description}</Typography>
      </Box>
      <IconButton onClick={onClick}>
        <Box className="material-icons-outlined">edit</Box>
      </IconButton>
      <IconButton onClick={onClick}>
        <Box className="material-icons-outlined">delete</Box>
      </IconButton>
    </Box>
  );
}

export default ShoppingListItem;
