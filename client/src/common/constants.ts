export const ACCESS_TOKEN = 'AccessToken';
export const REFRESH_TOKEN = 'RefreshToken';

export const API_ENDPOINT = {
  login: '/auth/token',
  register: '/auth/user/register',
  dashboard: '/dashboard',
  sheetData: '/transactions',
  createTransaction: '/transactions/create',
  deleteTransaction: '/transactions/delete/{id}'
};

export enum ENVIRONMENTS {
  LOCAL = 'LOCAL',
  DEV = 'DEV',
  PROD = 'PROD'
}
