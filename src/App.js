import React from 'react';

import UserProvider from 'context/UserProvider/index.js';
import TransactionsList from 'routes/TransactionsList';

import './App.css';

function App() {
  return (
    <UserProvider>
      <TransactionsList />
    </UserProvider>
  );
}

export default App;
