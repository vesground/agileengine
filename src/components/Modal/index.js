import React from 'react';

import Button from 'components/Button/index.js';

import './index.scss';

const Modal = ({
  component,
  open,
  hideModal,
  ...props
}) => {
  return (
    <div className='app-modal'>
      <div className="app-modal__container">
        <div className="app-modal__content">
          {component}
        </div>
        <Button onClick={hideModal}>Close</Button>
      </div>
    </div>
  );
}

export default Modal;
