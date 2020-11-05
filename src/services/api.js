import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.linketrack.com/',
});

export default api;
