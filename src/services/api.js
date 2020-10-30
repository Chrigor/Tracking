import axios from 'axios';

const api = axios.create({
  baseURL: 'ttps://api.linketrack.com/',
});

export default api;
