import { v1 as uuidv1 } from 'uuid';

const User = ({ first_name = 'empty', last_name = 'empty' }) => ({
  id: uuidv1(),
  first_name,
  last_name,
  transactions: [],
  amount: 0,
});

export default User;
