import config from "../config";

const apiConfig = {
    baseURL: config.apiUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  
  export default apiConfig;
  