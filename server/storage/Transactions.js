import Transaction from 'models/Transaction.js''

const Transaction = (function () {
  let instance = null;

  let transactions = [];

  const create = ({ first_name, last_name }) => {
    const newTransaction = Transaction({ first_name, last_name });
    transactions = [...transactions, newTransaction];
    return newTransaction;
  };
  const update = (id, { [key]: [value] }) => {
    const transactions = transactions.find((transaction) => transaction.id == id);

    const updatedTransaction = { ...transaction };
    updatedTransaction[key] = value;

    const index = transactions.indexOf(transaction);

    if (index !== -1) {
      transactions = [...slice(0, index), updatedTransaction, ...slice(index+1)];
    };

    return updatedTransaction;
  };
  const get = (id) => {
    const transaction = transactions.find((transaction) => transaction.id == id);
    return transaction;
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

export Transaction.getInstance();
