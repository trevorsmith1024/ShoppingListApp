import React, { Suspense } from 'react';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Typography, Toolbar, Container } from '@mui/material';

import { StyledAppBar, AppBarSpacer, Spinner, theme } from './Utils';

import './App.css';
import ShoppingList from './ShoppingList';

const AppQuery = graphql`
  query AppQuery {
    viewer {
      ...ShoppingList_list
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, AppQuery, {});

function App(props) {
  const data = usePreloadedQuery(AppQuery, props.preloadedQuery);
  return <ShoppingList viewer={data.viewer}/>;
}

function AppRoot(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <StyledAppBar>
          <Toolbar>
            <Typography variant='h6'>
              Shopping List
            </Typography>
          </Toolbar>
        </StyledAppBar>
        <AppBarSpacer/>
        <Container>
          <Suspense fallback={ <Spinner/> }>
            <App preloadedQuery={preloadedQuery} />
          </Suspense>
        </Container>
      </RelayEnvironmentProvider>
    </ThemeProvider>
  );
}

export default AppRoot;
