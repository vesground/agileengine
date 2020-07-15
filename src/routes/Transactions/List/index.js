import React, { useState, useEffect } from 'react';
import { compose } from 'redux'

import Transaction from 'routes/Transactions/List/Item';
import { withModalProvier } from 'context/ModalProvider/withProvider.js';
import TransactionAPI from 'service/api/TransactionAPI.js';

import './index.css';

function List({
  modalContext: { showModal },
}) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const transactions = await TransactionAPI.list();
      setTransactions(transactions);
    };
    fetchTransactions();
  })

  return (
    <div className='app-transactions-list'>
      {transactions.map(transaction => (
        <Transaction {...transaction} />
      ))}
    </div>
  );
}

const enhancer = compose(
  withModalProvier
);

export default enhancer(List);
