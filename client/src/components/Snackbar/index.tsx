import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToastSlice } from 'redux/Snackbar/slice';
import { selectToastMessage } from 'redux/Snackbar/selector';

import { Alert, Snackbar as MuiSnackbar, Stack, useTheme } from '@mui/material';
import { ToastMessageType } from './types';

export const Snackbar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { actions } = useToastSlice();

  const messages: ToastMessageType[] = useSelector(selectToastMessage);
  const modifiedMessages: ToastMessageType[] = useMemo(() => {
    return messages && messages?.length > 0 ? messages : [];
  }, [messages]);

  return (
    <Stack>
      {modifiedMessages?.map((item) => {
        return (
          <MuiSnackbar
            key={item?.id}
            open
            autoHideDuration={6000}
            onClose={() => dispatch(actions.hideMessage(item?.id))}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <Alert
              onClose={() => dispatch(actions.hideMessage(item?.id))}
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
            >
              {item?.message}
            </Alert>
          </MuiSnackbar>
        );
      })}
    </Stack>
  );
};
