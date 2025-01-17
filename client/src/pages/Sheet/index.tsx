import React, { useCallback, useEffect } from 'react';
import axios from 'axios';
import { Box, Grid2 } from '@mui/material';
import { PageHeader } from 'components/PageHeader';
import { CustomTable } from 'components/CustomTable';
import columnsJson from './metaData.json';

const cols = [
  {
    id: 1,
    date: '2025-01-01',
    time: '10:00 AM',
    purpose: 'Purchase of office supplies',
    amount: 150.75,
    tags: 'Office, Supplies',
    type: 'Expense'
  },
  {
    id: 2,
    date: '2025-01-02',
    time: '02:30 PM',
    purpose: 'Client meeting lunch',
    amount: 85.0,
    tags: 'Business, Lunch',
    type: 'Expense'
  },
  {
    id: 3,
    date: '2025-01-03',
    time: '09:00 AM',
    purpose: 'Monthly subscription for software',
    amount: 49.99,
    tags: 'Subscription, Software',
    type: 'Expense'
  },
  {
    id: 4,
    date: '2025-01-04',
    time: '11:15 AM',
    purpose: 'Refund from vendor',
    amount: 200.0,
    tags: 'Refund',
    type: 'Income'
  },
  {
    id: 5,
    date: '2025-01-05',
    time: '04:45 PM',
    purpose: 'Team building activity',
    amount: 300.0,
    tags: 'Team, Activity',
    type: 'Expense'
  }
];

export const Sheet = () => {
  const handleSheetCall = useCallback(async () => {
    try {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      // const response: any = await httpClient.post('/auth/token', loginFormData);
      const response = await axios.get('http://127.0.0.1:8000/api/token/');
      if (response.status === 200) return response?.data;
      else return [];
    } catch (error) {
      // shoot toast
      console.error('There was an error making the request', error);
    }
  }, []);

  useEffect(() => {
    const response = handleSheetCall();
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
        <CustomTable rowData={cols} columns={columnsJson.columns} />
      </Box>
    </Grid2>
  );
};
