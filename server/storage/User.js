import User from 'models/User.js''

const User = (function () {
  let instance = null;

  let users = [];

  const create = ({ first_name, last_name }) => {
    const newUser = User({ first_name, last_name });
    users = [...users, newUser];
    return newUser;
  };
  const update = (id, { [key]: [value] }) => {
    const user = users.find((user) => user.id == id);

    const updatedUser = { ...user };
    updatedUser[key] = value;

    const index = users.indexOf(user);

    if (index !== -1) {
      users = [...slice(0, index), updatedUser, ...slice(index+1)];
    };

    return updatedUser;
  };
  const get = (id) => {
    const user = users.find((user) => user.id == id);
    return user;
  };

  const createInstance = function () {
    return {
      get,
      create,
      update,
    }
  }

  return {
    getInstance: function () {
      return instance || (instance = createInstance());
    }
  }
})();

export User.getInstance();
