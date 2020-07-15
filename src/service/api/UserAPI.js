import API from 'service/api/requestBase.js';

export default {
  create: API.post({ path: '/users/' }),
  get: API.get({ path: '/users/:id' }),
};
