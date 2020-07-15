import { createContext } from 'react';

export const ModalContext = createContext({
  userContext: {
    component: null,
    showModal: () => {},
    hideModal: () => {},
  },
});
