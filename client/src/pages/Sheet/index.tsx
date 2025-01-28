import React, { memo, useCallback, useContext, useEffect, useState } from 'react';
import { Box, Grid2 } from '@mui/material';

import httpClient from 'services/httpClient';
import { API_ENDPOINT } from 'common/constants';
import { ToastContainer, toast } from 'react-toastify';

import columnsJson from './metaData.json';
import { PageHeader } from 'components/PageHeader';
import { CustomTable } from 'components/CustomTable';
import { RefreshContext } from 'context';

export const Sheet = memo(() => {
  const [rowData, setRowData] = useState<any>([]);
  const { refreshTrigger } = useContext(RefreshContext);
  const handleSheetCall = useCallback(async () => {
    try {
      const response = await httpClient.get(API_ENDPOINT.sheetData);
      if (response.status === 200) setRowData(response?.data);
      else setRowData([]);
    } catch (error) {
      toast('There was an error making the request');
    }
  }, []);

  useEffect(() => {
    handleSheetCall();
    return undefined;
  }, [handleSheetCall, refreshTrigger]);

  return (
    <Grid2 padding="24px">
      <PageHeader pageTitle="Sheet" sx={{ marginBottom: '16px' }} />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          overflow: 'scroll'
        }}
      >
        <CustomTable rowData={rowData} columns={columnsJson.columns} />
      </Box>
      <ToastContainer />
    </Grid2>
  );
});
