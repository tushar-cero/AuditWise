import React from 'react';
import { Outlet } from 'react-router-dom';
import { Grid2 } from '@mui/material';

import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';

export const Layout = () => {
  return (
    <>
      <Header/>
      <Grid2 sx={{
        display: 'flex',
        width: '100%',
        height: 'calc(100vh - 88px)'
      }}>
        <Sidebar/>
        <Outlet/>
      </Grid2>
    </>
  )
};
