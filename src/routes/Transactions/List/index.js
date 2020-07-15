import React, { useState, useEffect } from 'react';

import Text from 'components/Text';
import Transaction from 'routes/Transactions/List/Item';
import TransactionAPI from 'service/api/TransactionAPI.js';

import './index.scss';

function List({
  userId
}) {
  const [transactions, setTransactions] = useState([{
    "id": "string",
    "type": "credit",
    "amount": 0,
    "effectiveDate": "2020-07-15T05:12:30.811Z"
  }]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await TransactionAPI.list({ query: { userId }});
      setTransactions(data?.transactions);
    };
    // fetchTransactions();
  }, []);

  return (
    <div className='app-transactions-list'>
      <Text className='app-transactions-list__header'>Transactions</Text>
      {transactions.map(transaction => (
        <Transaction {...transaction} />
      ))}
    </div>
  );
}

export default List;
