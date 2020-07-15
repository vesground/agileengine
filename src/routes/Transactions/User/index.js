import React from 'react';

import Text from 'components/Text';

import './index.scss';

function User({
  firstName,
  lastName,
  amount,
}) {
  return (
    <div className='app-transactions-user'>
      <Text className='app-transactions-user__name'>Hello, {firstName} {lastName}</Text>
      <Text className='app-transactions-user__amount'>Account Ballance ${amount}</Text>
    </div>
  );
}

export default User;
