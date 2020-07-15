import React, { useState } from 'react';

import { ModalContext } from './context';
import Modal from 'components/Modal';

const ModalProvider = ({ children }) => {
  const [component, setComponent] = useState(null);
  const [props, setProps] = useState({});

  const showModal = (component, props = {}) => {
    setComponent(component);
    setProps(props);
  };

  const hideModal = () => {
    setComponent(null);
    setProps({});
  };

  return (
    <ModalContext.Provider
      value={{
        modalContext: {
          component,
          props,
          showModal,
          hideModal,
        },
      }}
    >
      {children}
      {component ? (
        <Modal
          component={component}
          hideModal={hideModal}
          // open
          {...props}
        />
      ) : null}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
