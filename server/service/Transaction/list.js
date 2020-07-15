import Storage from 'storage/Transactions.js';

const validateQuery = query => query && typeof query == 'number' && query >= 0;

function list(req, res) {
  const { limit = 0, skip = 0 } = req.query;
  const transactions = Storage.list();

  const transactionsWithSkip = validateQuery(skip) ? transactions.slice(skip): transactions;
  const transactionsWithLimit = validateQuery(limit) ? transactions.slice(0, limit): transactionsWithSkip;

  res.send({ limit, skip, transactions });
};

export default list;
