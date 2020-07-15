import React from 'react';
import { UserContext } from './context';

export function withUserProvier(Component) {
  return function HOC(props) {
    return (
      <UserContext.Consumer>
        {contexts => <Component {...props} {...contexts} />}
      </UserContext.Consumer>
    );
  };
}
