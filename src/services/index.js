import axios from 'axios';

const axiosConfig = {
  baseURL: 'https://api.imgur.com',
};

const instance = axios.create(axiosConfig);

instance.interceptors.request.use(async (config) => {
  const clienteId = "75c438770e966c5"
  config.headers.Authorization = `Client-ID ${clienteId}`;
  return config;
});

export default instance;
