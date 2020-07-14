import axios from 'axios';
import cookieReader from 'js-cookie';

const API_URL = 'http://localhost:3000/api/v1';
const AUTH_HEADER = 'Authorization';
const AUTH_COOKIE = 'access_token';

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
  const token = cookieReader.get(AUTH_COOKIE);

  if (token) {
    headers[AUTH_HEADER] = `Bearer ${token}`;
  }

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
    const result = { loading: false, data: response?.data, error: response?.detail }

    return result;
  } catch (error) {
    const result = { loading: false, data: null, error };
    notify(result);
    return result;
  }
};

export default {
  get: httpClient(),
  post: httpClient('post'),
  put: httpClient('put'),
  remove: httpClient('delete'),
}
