import React, { useCallback, useEffect, useState } from 'react';
import { Box, Grid2 } from '@mui/material';

import httpClient from 'services/httpClient';
import { API_ENDPOINT } from 'common/constants';

import columnsJson from './metaData.json';
import { PageHeader } from 'components/PageHeader';
import { CustomTable } from 'components/CustomTable';
import { useToastSlice } from 'redux/Snackbar/slice';

export const Sheet = () => {
  const { actions } = useToastSlice();
  const [rowData, setRowData] = useState<any>([]);
  const handleSheetCall = useCallback(async () => {
    try {
      const response = await httpClient.get(API_ENDPOINT.sheetData);
      if (response.status === 200) setRowData(response?.data);
      else setRowData([]);
    } catch (error) {
      dispatch(actions.showMessage('There was an error making the request'));
      console.error('There was an error making the request', error);
    }
  }, []);

  useEffect(() => {
    handleSheetCall();
    // put data in redux, fetch it from redux and put it in the table.
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    </Grid2>
  );
};
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
