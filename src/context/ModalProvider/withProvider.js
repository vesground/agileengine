import React from 'react';
import { ModalContext } from './context';

export function withModalProvier(Component) {
  return function HOC(props) {
    return (
      <ModalContext.Consumer>
        {contexts => <Component {...props} {...contexts} />}
      </ModalContext.Consumer>
    );
  };
}
