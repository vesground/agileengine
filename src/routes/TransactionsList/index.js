import React from 'react';
import { compose } from 'redux'

import { withUserProvier } from 'context/UserProvider/withProvider.js';

import './index.css';

function App() {
  return (
    <div>hey here</div>
  );
}

const enhancer = compose(
  withUserProvier
);

export default enhancer(App);
