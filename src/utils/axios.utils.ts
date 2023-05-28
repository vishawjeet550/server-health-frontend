import axios from 'axios';
import apiConfig from './apiConfig';

const apiService = axios.create({
  baseURL: apiConfig.baseURL,
  headers: apiConfig.headers,
});

export default apiService;
