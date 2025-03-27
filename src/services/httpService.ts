import { parseAuthFromCookie } from '@/utils/Helpers';
import type { AxiosInstance } from 'axios';
import axios from 'axios';

class HttpService {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create();

    this.axios.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }

  attachTokenToHeader() {
    const token = parseAuthFromCookie().token;
    this.axios.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        config.headers.Authorization = token;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }
}

const httpService = new HttpService();
export default httpService;
