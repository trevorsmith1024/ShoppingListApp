import { styled, createTheme } from '@mui/material/styles';
import { AppBar, Button } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4D81B7',
    },
    secondary: {
      main: '#FAFAFA',
    },
    outline: {
      primary: '#C6C6C6',
    },
    button: {
      main: '#1871E8',
    },
    text: {
      black: '#000000',
      primary: '#2A323C',
      secondary: '#5C6269',
      disabled: 'rgba(0, 0, 0, 0.12)'
    },
    grey: {
      [75]: '#7D7A7A'
    }
  },
  typography: {
    fontSize: 14,
    fontFamily: "'Nunito', sans-serif",
    barFontFamily: "'Dosis', sans-serif",
    h6: {
      fontSize: "1.15rem",
    },
    strong1: {
      fontSize: "1.15rem",
    },
    strong2: {
      fontWeight: 600
    }
  },
  shadows: Array(12).fill('none'),

});

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  fontFamily: theme.typography.barFontFamily,
  textTransform: 'uppercase',
}));
export const AppBarSpacer = styled('div')(({ theme }) => theme.mixins.toolbar);
export const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.button.main
}));
export const TextButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary
}));
export const IconButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: 0,
  minWidth: 0,
}));

export const borderStyles = {
  border: 1,
  borderColor: 'outline.primary',
  borderRadius: 1
}
export const centeredModalStyle = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  outlineWidth: 0,
}

const getViewer = (store) => store.getRoot().getLinkedRecord('viewer');

//this would not have to be done manually if a connection was used
export const addToClientList = rootField => store => {
  const viewer = getViewer(store);
  const newNode = store.getRootField(rootField);
  const newShoppingList =
    [ ...viewer.getLinkedRecords('shoppingList'), newNode ]
  viewer.setLinkedRecords(newShoppingList, 'shoppingList')
}

export const removeFromClientList = rootField => store => {
  const viewer = getViewer(store);
  const oldNode = store.getRootField(rootField);
  const newShoppingList =
    viewer.getLinkedRecords('shoppingList').filter(n =>
      n._dataID !== oldNode._dataID
    )
  viewer.setLinkedRecords(newShoppingList, 'shoppingList')
}
