import React, { useState } from 'react';

import { ModalContext } from './context';
import Modal from 'components/Modal';

const ModalProvider = ({ children }) => {
  const [component, setComponent] = useState(null);

  const showModal = (component) => {
    setComponent(component);
  };

  const hideModal = () => {
    setComponent(null);
  };

  return (
    <ModalContext.Provider
      value={{
        modalContext: {
          component,
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
        />
      ) : null}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
