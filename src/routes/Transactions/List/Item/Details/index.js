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
  id,
  userContext: { user }
}) {
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const fetchTransaction = async () => {
      const data = await TransactionAPI.get({ params: { ':id': id }});
      setTransaction(data);
    };
    fetchTransaction();
  }, []);

  console.log('here', transaction?.effectiveDate);

  const type = transaction?.type;
  const convertedData = transaction?.effectiveDate ? new Date(transaction?.effectiveDate * 1000) : '-';
  console.log('and here', convertedData);

  return (
    <div className={prefix}>
      {transaction != null && (
        <>
          <Text className={`${prefix}__date`}>{convertedData}</Text>
          <Text className={classnames(`${prefix}__type`, {
            [`${prefix}__debit`]: type == DEBIT,
            [`${prefix}__credit`]: type == CREDIT,
          })}>
            {capitalize(type)}
          </Text>
          <Text className={`${prefix}__amount`}>${transaction?.amount}</Text>
          <Text className={`${prefix}__author`}>{user.firstName} {user.lastName}</Text>
        </>
      )}
    </div>
  );
}

const enhancer = compose(
  withUserProvier
);

export default enhancer(Details);
