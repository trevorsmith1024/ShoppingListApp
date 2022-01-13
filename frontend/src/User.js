import graphql from 'babel-plugin-relay/macro';

import type {UserComponent_user$key} from 'UserComponent_user.graphql';

import React from 'react';
import {useFragment} from 'react-relay';

type Props = {
  user: UserComponent_user$key,
};

function UserComponent(props: Props) {
  const data = useFragment(
    graphql`
      fragment UserComponent_user on User {
        name
      }
    `,
    props.user,
  );

  return (
    <>
      <h1>From fragment: {data.name}</h1>
    </>
  );
}

export default UserComponent;
