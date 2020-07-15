import React from 'react';

import './index.css';

function User({
  firstName,
  lastName,
  amount,
}) {
  return (
    <div className='app-transactions-user'>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{amount}</p>
    </div>
  );
}

export default User;
