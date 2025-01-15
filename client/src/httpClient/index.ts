import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

interface CustomError {
  message: string;
  status?: number;
  data?: any;
}

const defaultConfig = {
  baseURL: process.env.API_BASE_URL,
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json'
  }
};

// Create axios instance with default config
const axiosInstance = axios.create(defaultConfig);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const customError: CustomError = {
      message: error.message || 'Something went wrong'
    };

    if (error.response) {
      customError.status = error.response.status;
      customError.data = error.response.data;
    }

    return Promise.reject(customError);
  }
);

type HttpResponse<T> = Promise<AxiosResponse<T>>;

// ----- HTTP client methods
const httpClient = {
  get: <T>(url: string, config?: AxiosRequestConfig): HttpResponse<T> => {
    return axiosInstance.get(url, config);
  },

  post: <T>(url: string, data?: any, config?: AxiosRequestConfig): HttpResponse<T> => {
    return axiosInstance.post(url, data, config);
  },

  put: <T>(url: string, data?: any, config?: AxiosRequestConfig): HttpResponse<T> => {
    return axiosInstance.put(url, data, config);
  },

  patch: <T>(url: string, data?: any, config?: AxiosRequestConfig): HttpResponse<T> => {
    return axiosInstance.patch(url, data, config);
  },

  delete: <T>(url: string, config?: AxiosRequestConfig): HttpResponse<T> => {
    return axiosInstance.delete(url, config);
  }
};

export default httpClient;
