import Transaction from 'model/Transaction.js';

const Storage = (function () {
  let instance = null;

  let transactions = [];

  const create = ({ author, type, amount }) => {
    const newTransaction = Transaction({ author, type, amount });
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
  const list = () => {
    const sortedByDateTtransactions = transactions.sort((prevTransaction, nextTransaction) => prevTransaction.created_at - prevTransaction.nextTransaction);
    return sortedByDateTtransactions;
  };

  const createInstance = function () {
    return {
      get,
      list,
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

export default Storage.getInstance();
