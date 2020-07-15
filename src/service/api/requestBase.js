import axios from 'axios';

import { keysToCamel } from 'service/helpers.js'

const API_URL = 'http://localhost:4000/api/v1';

const httpClient = (method = 'get') => ({
  path = '',
  timeout = 5000,
  additionalHeaders = {},
}) => async ({
  params = {},
  query = {},
  data = {},
} = {}) => {
  const headers = {
    ...additionalHeaders
  };

  let pathWithParams = path;
  for (const param in params) {
    pathWithParams = pathWithParams.replace(param, params[param]);
  };

  try {
    const response = await axios({
      url: pathWithParams,
      baseURL: API_URL,
      params: query,
      method,
      timeout,
      headers,
      data,
    });

    return response?.data && keysToCamel(response?.data);
  } catch (error) {
    return error;
  }
};

export default {
  get: httpClient(),
  post: httpClient('post'),
  put: httpClient('put'),
  remove: httpClient('delete'),
}
