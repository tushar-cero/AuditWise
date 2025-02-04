import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Grid2 } from '@mui/material';

import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';

export const Layout = memo(() => {
  return (
    <>
      <Header />
      <Grid2
        sx={{
          display: 'flex',
          width: '100%',
          height: 'calc(100vh - 88px)'
        }}
      >
        <Sidebar />
        <Box width="100%" overflow="hidden">
          <Outlet />
        </Box>
      </Grid2>
    </>
  );
});
