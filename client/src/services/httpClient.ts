import axios from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'common/constants';

const httpClient = axios.create({
  //   baseURL: process.env.API_BASE_URL
  baseURL: 'http://127.0.0.1:8000/api/'
});

httpClient.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem(REFRESH_TOKEN);
      const response = await httpClient.post('/auth/token/refresh/', {
        refresh: refreshToken
      });
      const newAccessToken = response.data.access;
      localStorage.setItem('access_token', newAccessToken);
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return httpClient(originalRequest);
    }
    return Promise.reject(new Error(error));
  }
);

export default httpClient;
