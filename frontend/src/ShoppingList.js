import graphql from 'babel-plugin-relay/macro';

import type {ShoppingList_list$key} from 'ShoppingList_list.graphql';

import React, {useState} from 'react';
import {useFragment} from 'react-relay';

import { Typography, Container, Box, Button, Modal, AppBar, Toolbar } from '@mui/material';

import { AppBarSpacer } from './Utils';
import CancelButton from './CancelButton.svg';

import ShoppingListContext from './ShoppingListContext'

import ShoppingListItem from './ShoppingListItem';
import { ShoppingListItemCreator, ShoppingListItemEditor } from './ShoppingListItemEditor';

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
  const editNone = () => setCurrentlyEditing(false);

  const editingNew = currentlyEditing === true;
  const editingExisting = currentlyEditing !== false;

  const mainContent = !data.shoppingList.length ?
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
    :
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

  const editorForm = 
    editingNew ?
      <ShoppingListItemCreator/> :
    editingExisting ?
      <ShoppingListItemEditor item={currentlyEditing} /> :
      false;

  return <ShoppingListContext.Provider value={setCurrentlyEditing}>
    { editorForm && (
      <Modal open={true} onClose={editNone}>
        <Box sx={modalStyle}>
          <AppBar color='secondary' sx={{borderBottom: '1px solid', borderColor: '#D5DFE9'}}>
            <Toolbar>
              <Typography variant='h6' sx={{ textTransform: 'uppercase', flexGrow: 1 }}>
                Shopping List
              </Typography>
              <Button onClick={editNone} sx={{padding: 0, minWidth: 0}}>
                  <img src={CancelButton}/>
              </Button>
            </Toolbar>
          </AppBar>
          <AppBarSpacer/>
          <Container sx={{height: '100%', p: 4}}>
            {editorForm}
          </Container>
        </Box>
      </Modal>
    )}
    {mainContent}
  </ShoppingListContext.Provider>
}

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

const modalStyle = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 560,
  height: 768,
  bgcolor: 'background.paper',
  outlineWidth: 0,
  border: 0,
  borderBottom: '5px solid',
  borderColor: 'primary.main',
}

export default ShoppingList;
