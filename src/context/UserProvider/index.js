import React, { useEffect, useState } from 'react';

import { UserContext } from './context';
import UserAPI from 'service/api/UserAPI.js';

const UserProvider = ({ children, ...props }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const data = await UserAPI.get({});
      setUser(data);
    };
    fetchUser();
  }, [])

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
