import graphql from 'babel-plugin-relay/macro';

import type {ShoppingList_list$key} from 'ShoppingList_list.graphql';

import React, {useState} from 'react';
import {useFragment} from 'react-relay';

import { Typography, Container, Box, Button } from '@mui/material';

import ShoppingListContext from './ShoppingListContext'

import ShoppingListItem from './ShoppingListItem';
import { ShoppingListItemCreator, ShoppingListItemEditor } from './ShoppingListItemEditor';

const borderStyles = {
  border: 1,
  borderColor: 'outline.primary',
  borderRadius: 1
}

const flexConfigurationStyles = {
  vertical: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

function ShoppingList(props) {
  const data = useFragment(
    graphql`
      fragment ShoppingList_list on Viewer {
        shoppingList {
          id
          ...ShoppingListItem_item
        }
      }
    `,
    props.viewer
  );

  const [currentlyEditing, setCurrentlyEditing] = useState(false);
  const editNew = () => setCurrentlyEditing(true);

  const editingNew = currentlyEditing === true;
  const editingExisting = currentlyEditing !== false;

  let mainContent;

  if (!data.shoppingList.length) {
    mainContent = (
      <Box mt={'110px'}>
        <Box sx={{ ...borderStyles, ...flexConfigurationStyles.vertical,
            height: 290,
            width: 619,
            margin: '0 auto',
        }}>
          <Typography>
            Your shopping list is empty :(
          </Typography>
          <Button style={{ margin: '1rem' }} variant='contained' onClick={editNew}>
              Add your first item
          </Button>
          {/* Spacer for flex flow */}
          <div style={{ height: '1em' }}></div>
        </Box>
      </Box>
    )
  }

  else {
    mainContent = (
      <>
        <Box sx={{ ...borderStyles }} >
          <h1>ShoppingList</h1>
          {
            data.shoppingList.map(item =>
              <ShoppingListItem key={item.id} item={item}/>
            )
          }
          <button onClick={editNew}>
            New item
          </button>
        </Box>
      </>
    );
  }

  console.log(editingNew, editingExisting)

  return <ShoppingListContext.Provider value={setCurrentlyEditing}>
    {
      editingNew ?
        <ShoppingListItemCreator/> :
      editingExisting ?
        <ShoppingListItemEditor item={currentlyEditing} /> :
        undefined
    }
    {mainContent};
  </ShoppingListContext.Provider>
}

export default ShoppingList;
