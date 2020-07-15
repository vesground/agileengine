import React from 'react';

import UserProvider from 'context/UserProvider/index.js';
import ModalProvider from 'context/ModalProvider/index.js';
import Transactions from 'routes/Transactions';

import './App.css';

function App() {
  return (
    <UserProvider>
      <ModalProvider>
        <Transactions />
      </ModalProvider>
    </UserProvider>
  );
}

export default App;
