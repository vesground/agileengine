import React from 'react';
import classnames from 'classnames';
import { compose } from 'redux'

import TransactionDetails from 'routes/Transactions/List/Item/Details';
import Text from 'components/Text';

import { capitalize } from 'service/helpers.js'
import { DEBIT, CREDIT } from 'service/enums.js'
import { withModalProvier } from 'context/ModalProvider/withProvider.js';

import './index.scss';

function Item({
  id,
  type,
  amount,
  effectiveDate,
  modalContext: { showModal },
}) {
  const handleClick = () => {
    showModal(<TransactionDetails id={id} />)
  };

  return (
    <div className='app-transactions-list-item' onClick={handleClick}>
      <Text className={classnames({
        'app-transactions-list-item__debit': type == DEBIT,
        'app-transactions-list-item__credit': type == CREDIT,
      })}>
        {capitalize(type)}
      </Text>
      <Text>${amount}</Text>
    </div>
  );
}

const enhancer = compose(
  withModalProvier
);

export default enhancer(Item);
