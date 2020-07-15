import React from 'react';
import { compose } from 'redux'

import User from 'routes/Transactions/User';
import List from 'routes/Transactions/List';
import { withUserProvier } from 'context/UserProvider/withProvider.js';

import './index.css';

function Transactions({
  userContext: { user },
}) {
  return (
    <div className='app-transactions'>
      <User {...user} />
      <List userId={user?.id} />
    </div>
  );
}

const enhancer = compose(
  withUserProvier
);

export default enhancer(Transactions);
