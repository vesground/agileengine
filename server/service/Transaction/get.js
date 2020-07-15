import Storage from 'storage/Transactions.js';

function get(req, res) {
  const { id } = req.params;
  const transaction = Storage.get(id);
  res.send(transaction);
};

export default get;
