import config from "../config";

const apiConfig = {
    baseURL: config.apiUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  export default apiConfig;
  