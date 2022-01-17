import graphql from 'babel-plugin-relay/macro';

import type {ShoppingList_list$key} from 'ShoppingList_list.graphql';

import React, {useState} from 'react';
import {useFragment} from 'react-relay';

import { Typography, Container, Box, Button, Modal, AppBar, Toolbar } from '@mui/material';
import { PrimaryButton, IconButton, borderStyles, centeredModalStyle } from './Utils';

import { StyledAppBar, AppBarSpacer } from './Utils';

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
        <PrimaryButton style={{ margin: '1rem' }} variant='contained' onClick={editNew}>
            Add your first item
        </PrimaryButton>
        {/* Spacer for flex flow */}
        <div style={{ height: '1rem' }}></div>
      </Box>
    </Box>
    :
    <Box pt={5}>
      <Box sx={{ display: 'flex' }}>
        <Typography variant='h5'
            sx={{ display: 'inline', flexGrow: 1, color: 'text.black' }}>
          Your Items
        </Typography>
        <PrimaryButton variant='contained' onClick={editNew}>
          Add Item
        </PrimaryButton>
      </Box>
      {
        data.shoppingList.map(item =>
          <ShoppingListItem key={item.id} item={item}/>
        )
      }
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
          <StyledAppBar color='secondary' sx={{borderBottom: '1px solid', borderColor: '#D5DFE9'}}>
            <Toolbar>
              <Typography variant='h6' sx={{ flexGrow: 1 }}>
                Shopping List
              </Typography>
              <IconButton onClick={editNone}>
                <Box className="material-icons" sx={{ color: 'text.primary' }}>
                  first_page
                </Box>
              </IconButton>
            </Toolbar>
          </StyledAppBar>
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


const flexConfigurationStyles = {
  vertical: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const modalStyle = {
  ...centeredModalStyle,
  width: 560,
  height: 768,
  borderBottom: '5px solid',
  borderColor: 'primary.main',
}

export default ShoppingList;
