import React from 'react';

import UserProvider from 'src/context/UserProvider/index.js';
import TransactionsList from 'src/routes/TransactionsList';

import './App.css';

function App() {
  return (
    <UserProvider>
      <TransactionsList />
    </UserProvider>
  );
}

export default App;
