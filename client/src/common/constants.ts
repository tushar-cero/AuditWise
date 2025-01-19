export const ACCESS_TOKEN = 'AccessToken';
export const REFRESH_TOKEN = 'RefreshToken';

export const API_ENDPOINTS = {
  login: '/auth/token',
  register: '/auth/user/register',
  logout: '/auth/logout',
  dashboard: '/dashboard',
  sheetData: '/transactions',
  createTransaction: '/transactions/create',
  deleteTransaction: '/transactions/delete/{id}'
};
