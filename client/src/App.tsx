import React, { FC, memo, useCallback, useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from 'routes';
import { ThemeProvider } from '@mui/material';
import { generateTheme } from 'style/theme';
import { RefreshContext } from 'context';

export const App: FC = memo(() => {
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const refresh = useCallback(() => setRefreshTrigger(!refreshTrigger), [refreshTrigger]);
  const contextValue = useMemo(() => ({ refresh, refreshTrigger }), [refresh, refreshTrigger]);

  return (
    <ThemeProvider theme={generateTheme('light', 'App')}>
      <RefreshContext.Provider value={contextValue}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </RefreshContext.Provider>
    </ThemeProvider>
  );
});
