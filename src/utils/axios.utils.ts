import axios from 'axios';
import apiConfig from './apiConfig';

const apiService = axios.create({
  baseURL: apiConfig.baseURL,
  headers: apiConfig.headers,
  withCredentials: true
});

export default apiService;
