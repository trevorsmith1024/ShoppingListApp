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

import UserComponent from './User';

const { Suspense } = React;

// Define a query
const AppUserQuery = graphql`
  query AppUserQuery {
    user(id: "VXNlcjph") {
      id
      name
      ...UserComponent_user
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(RelayEnvironment, AppUserQuery, {
  /* query variables */
});

function App(props) {
  const data = usePreloadedQuery(AppUserQuery, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.user.name}</p>
        <UserComponent user={data.user}/>
      </header>
    </div>
  );
}

function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
