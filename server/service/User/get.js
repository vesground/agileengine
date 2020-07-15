import Storage from 'storage/Users.js';


function get(req, res) {
  const user = Storage.getDefault();
  res.send(user);
};

export default get;
