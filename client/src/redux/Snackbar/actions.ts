import { toastActions } from './slice';

export const error = (message: string, title = '') => {
  return toastActions.showMessage({ id: Date.now(), type: 'error', message, title });
};

export const success = (message: string, title = '') => {
  return toastActions.showMessage({ id: Date.now(), type: 'success', message, title });
};

export const warning = (message: string, title = '') => {
  return toastActions.showMessage({ id: Date.now(), type: 'warning', message, title });
};

export const info = (message: string, title = '') => {
  return toastActions.showMessage({ id: Date.now(), type: 'info', message, title });
};
