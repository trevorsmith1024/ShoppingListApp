import React from 'react';
import './App.css';
import fetchGraphQL from './fetchGraphQL';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Typography, AppBar, Toolbar, Container } from '@mui/material';

import { AppBarSpacer } from './Utils';

import ShoppingList from './ShoppingList';

const { Suspense } = React;

// Define a query
const AppQuery = graphql`
  query AppQuery {
    viewer {
      ...ShoppingList_list
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(RelayEnvironment, AppQuery, {
  /* query variables */
});

const theme = createTheme({
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
  },
  typography: {
    fontSize: 14,
    h6: {
      fontSize: "1.15rem",
    }
  },
  shadows: Array(12).fill('none')
});

function App(props) {
  const data = usePreloadedQuery(AppQuery, props.preloadedQuery);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant='h6' sx={{ textTransform: 'uppercase' }}>
            Shopping List
          </Typography>
        </Toolbar>
      </AppBar>
      <AppBarSpacer/>
      <Container>
        <ShoppingList viewer={data.viewer}/>
      </Container>
    </>
  );
}

function AppRoot(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Suspense fallback={'Loading...'}>
          <App preloadedQuery={preloadedQuery} />
        </Suspense>
      </RelayEnvironmentProvider>
    </ThemeProvider>
  );
}

export default AppRoot;
