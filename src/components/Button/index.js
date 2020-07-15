import React from 'react';

import Text from 'components/Text';

import './index.scss';

const Button = ({
  children,
  ...props
}) => {
  return (
    <button className='app-button' {...props}>
      <Text>{children}</Text>
    </button>
  );
}

export default Button;
