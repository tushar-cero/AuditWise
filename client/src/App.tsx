import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from 'routes';
import { ThemeProvider } from '@mui/material';
import { generateTheme } from 'style/theme';

export const App: FC = () => {
  return (
    <ThemeProvider theme={generateTheme('light', 'App')}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
