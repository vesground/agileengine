import React, { useEffect, useState } from 'react';

import { UserContext } from './context';
import UserAPI from 'service/api/UserAPI.js';

const UserProvider = ({ children, ...props }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const user = await UserAPI.get({});
      setUser(user);
    };
    fetchUser();
  })

  return (
    <UserContext.Provider
      value={{
        userContext: {
          user
        },
      }}
    >
      {React.Children.only(children)}
    </UserContext.Provider>
  );
}

export default UserProvider;
