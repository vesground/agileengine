import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { compose } from 'redux'

import Text from 'components/Text';

import { capitalize } from 'service/helpers.js'
import { DEBIT, CREDIT } from 'service/enums.js'
import { withUserProvier } from 'context/UserProvider/withProvider.js';
import TransactionAPI from 'service/api/TransactionAPI.js';

import './index.scss';

const prefix = 'app-transactions-list-item-details';
function Details({
  transactionId,
  userContext: { user }
}) {
  const [transaction, setTransaction] = useState({
    "id": "string",
    "type": "credit",
    "amount": 0,
    "effectiveDate": "2020-07-15T05:12:30.811Z"
  });

  useEffect(() => {
    const fetchTransaction = async () => {
      const data = await TransactionAPI.get({ params: { id: transactionId }});
      setTransaction(data?.transactions);
    };
    // fetchTransaction();
  }, []);

  const type = transaction?.type;


  return (
    <div className={prefix}>
      <Text className={`${prefix}__date`}>{transaction?.effectiveDate}</Text>
      <Text className={classnames(`${prefix}__type`, {
        [`${prefix}__debit`]: type == DEBIT,
        [`${prefix}__credit`]: type == CREDIT,
      })}>
        {capitalize(type)}
      </Text>
      <Text className={`${prefix}__amount`}>${transaction?.amount}</Text>
      <Text className={`${prefix}__author`}>{user.firstName} {user.lastName}</Text>
    </div>
  );
}

const enhancer = compose(
  withUserProvier
);

export default enhancer(Details);
