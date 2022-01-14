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
import { CssBaseline, Box, AppBar, Container } from '@mui/material';

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

function App(props) {
  const data = usePreloadedQuery(AppQuery, props.preloadedQuery);

  return (
    <Container>
      <AppBar>
        Shopping List
      </AppBar>
      <ShoppingList viewer={data.viewer}/>
    </Container>
  );
}

const theme = createTheme();

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
