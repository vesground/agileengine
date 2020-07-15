import { createContext } from 'react';

export const UserContext = createContext({
  userContext: {
    component: null,
    props: {},
    showModal: () => {},
    hideModal: () => {},
  },
});
