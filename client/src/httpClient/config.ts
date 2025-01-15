export const apiConfig = {
  development: {
    baseURL: 'http://localhost:3000/api',
    timeout: 30000
  },
  production: {
    baseURL: 'https://api.production.com',
    timeout: 30000
  },
  test: {
    baseURL: 'http://localhost:3000/api',
    timeout: 30000
  }
};

type Env = 'development' | 'production' | 'test';

export const getApiConfig = () => {
  const env: Env = (process.env.APPLICATION_ENV as Env) || 'development';
  return apiConfig[env];
};
