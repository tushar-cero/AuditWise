import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ToastMessagesType } from 'components/Snackbar/types';

export const initialState: ToastMessagesType = {
  messages: []
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showMessage(state, action: PayloadAction<any>) {
      state.messages.push(action?.payload || {});
    },
    hideMessage(state, action: PayloadAction<any>) {
      const messages = state?.messages?.filter((item) => item.id !== action?.payload) || [];
      state.messages = messages;
    }
  }
});

export const { actions: toastActions } = toastSlice;

export const useToastSlice = () => {
  return { actions: toastSlice.actions };
};

export default toastSlice;
