import TransactionsStorage from 'storage/Transactions.js';
import UsersStorage from 'storage/Users.js';
import Transaction from 'model/Transaction.js';

const getTransaction = (type) => {
  const TRANSACTIONS = {
    debit: (account, value) => +account - +value,
    credit: (account, value) => +account + +value,
  };

  return TRANSACTIONS[type];
};

function create(req, res) {
  const data = req.body;

  const proceedTransaction = getTransaction(data.type);

  if (!proceedTransaction) {
    res.status(500).send('Error! Most likely you passed wrong transaction type.');
    return;
  };

  const user = UsersStorage.getDefault();

  const nextAmount = proceedTransaction(user.amount, data.amount);
  const isAmountExceeded = nextAmount < 0;

  if (isAmountExceeded) {
    res.status(500).send('Transaction can not be proceeded because of insufficient account number');
    return;
  };

  const newTransaction = TransactionsStorage.create({ author: user.id,  ...data });
  const updatedTransactionsList = [...user.transactions, newTransaction.id];

  UsersStorage.update(user.id, { transactions: updatedTransactionsList, amount: nextAmount });

  res.send(newTransaction);
};

export default create;
