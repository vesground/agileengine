import React from 'react';

import './index.css';

const Modal = ({
  component: Component,
  open,
  hideModal,
  ...props
}) => {
  return (
    <div class='modal'>
      <div class="container">
        <div class="content">
          <Component {...props} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
