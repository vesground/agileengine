import { v1 as uuidv1 } from 'uuid';

const Transaction = ({ author, type, amount }) => ({
  id: uuidv1(),
  author,
  type,
  amount,
  created_at: Date.now(),
  updated_at: Date.now(),
});

export default Transaction;
