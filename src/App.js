import React from 'react';

import UserProvider from 'context/UserProvider/index.js';
import ModalProvider from 'context/ModalProvider/index.js';
import TransactionsList from 'routes/TransactionsList';

import './App.css';

function App() {
  return (
    <UserProvider>
      <ModalProvider>
        <TransactionsList />
      </ModalProvider>
    </UserProvider>
  );
}

export default App;
