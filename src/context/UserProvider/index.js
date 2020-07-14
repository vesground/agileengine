import React, { useEffect, useState } from 'react';

import { UserContext } from './context';
import UserAPI from 'service/UserAPI.js';
// import { localStore } from 'service/localStorage';
// import { isJsonString, deduplicate } from 'utils/helpers';


// const saveUserInLocalStore = courses => {
//   localStore.setItem('ShoppingCart', JSON.stringify({ items: courses }));
// };

const UserProvider = (props) => {
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
          user: {}
        },
      }}
    >
      {React.Children.only(children)}
    </UserContext.Provider>
  );
}

export default UserProvider;
