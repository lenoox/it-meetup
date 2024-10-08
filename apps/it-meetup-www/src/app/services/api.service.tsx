import { filteredParamsIfNotNull } from '../utils/utils';
import axios, { AxiosResponse } from 'axios';
import { localStorageService } from './storage.service';
import { goToPage } from './navigate.service';

const axiosApi = axios.create();
const getApiUrl = () => {
  return import.meta.env.VITE_API_URL;
};

const get = async <T,>(pathRequest: string, paramsRequest?: unknown) => {
  const paramsFilter = filteredParamsIfNotNull(paramsRequest);
  const response: AxiosResponse<T> = await apiService
    .axiosInterceptor()
    .get<T>(`${apiService.getApiUrl()}${pathRequest}`, {
      params: paramsFilter,
    });
  return response;
};
const post = async <T,>(pathRequest: string, data?: unknown) => {
  const response: AxiosResponse<T> = await apiService
    .axiosInterceptor()
    .post<T>(`${apiService.getApiUrl()}${pathRequest}`, data);
  return response;
};
const axiosInterceptor = () => {
  axiosApi.interceptors.request.use(
    (config) => {
      const token = localStorageService.getLocalStorage('token');
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      } else {
        goToPage('/login');
      }
      return config;
    },
    () => {
      return Promise.reject(new Error('Something went wrong'));
    }
  );
  return axiosApi;
};

export const apiService = {
  getApiUrl,
  get,
  post,
  axiosApi,
  axiosInterceptor,
};
