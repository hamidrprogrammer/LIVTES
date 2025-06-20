import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

interface ApiClientConfig extends AxiosRequestConfig {
  showLoading?: boolean;
}

// This function will be called with the setLoading function from the LoadingContext
// to allow API calls to control the global loading state.
let globalSetLoading: ((loading: boolean) => void) | null = null;

export const setGlobalLoading = (setLoadingFunc: (loading: boolean) => void) => {
  globalSetLoading = setLoadingFunc;
};

const createApiClient = (baseURL: string) => {
  const api: AxiosInstance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  api.interceptors.request.use(
    (config: ApiClientConfig) => {
      if (config.showLoading && globalSetLoading) {
        globalSetLoading(true);
      }
      return config;
    },
    (error: AxiosError) => {
      if ((error.config as ApiClientConfig).showLoading && globalSetLoading) {
        globalSetLoading(false);
      }
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response: AxiosResponse) => {
      if ((response.config as ApiClientConfig).showLoading && globalSetLoading) {
        globalSetLoading(false);
      }
      return response;
    },
    (error: AxiosError) => {
      if ((error.config as ApiClientConfig).showLoading && globalSetLoading) {
        globalSetLoading(false);
      }
      // Handle global errors here (e.g., show toast, redirect to login)
      return Promise.reject(error);
    }
  );

  return api;
};

export default createApiClient;


