import React from 'react';

import './index.css';

function Item({
  type,
  amount,
  effectiveDate,
}) {
  return (
    <div className='app-transactions-list-item'>
      <p>{type}</p>
      <p>{amount}</p>
    </div>
  );
}


export default Item;
