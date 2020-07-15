import { v1 as uuidv1 } from 'uuid';

const Transaction = ({ author, type, amount }) => ({
  id: uuidv1(),
  author,
  type,
  amount,
  effective_date: Date.now(),
});

export default Transaction;
