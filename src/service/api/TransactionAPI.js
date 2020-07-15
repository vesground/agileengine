import API from 'service/api/requestBase.js';

export default {
  create: API.post({ path: '/transactions/' }),
  get: API.get({ path: '/transactions/:id' }),
  list: API.get({ path: '/transactions/' }),
};
