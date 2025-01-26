type AlertColor = 'success' | 'info' | 'warning' | 'error';

export interface ToastMessageType {
  id?: number;
  title?: string;
  message: string;
  type: AlertColor;
  showMessage?: boolean;
  hideCloseButton?: boolean;
}

export interface ToastMessagesType {
  messages: ToastMessageType[];
}

export interface RootState {
  toast?: ToastMessagesType;
}
