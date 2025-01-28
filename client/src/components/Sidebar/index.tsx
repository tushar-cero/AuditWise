import React, { memo, useCallback, useContext, useState } from 'react';
import { Button, Grid2, List, ListItemButton, TextField, Box, Typography, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { IconLibrary } from 'style/icons';
import httpClient from 'services/httpClient';
import { API_ENDPOINT } from 'common/constants';
import { useTranslate } from 'hooks/useTranslate';
import { CustomModal } from 'components/CustomModal';
import { CustomButton } from 'utils/customMUI';
import { RefreshContext } from 'context';

interface Route {
  name: string;
  icon: string;
  route: string;
}

// Example usage
const routes: Route[] = [
  {
    name: 'Dashboard',
    icon: 'DashboardIcon',
    route: '/dashboard'
  },
  {
    name: 'Sheet',
    icon: 'SheetIcon',
    route: '/sheet'
  }
];

export const Sidebar = memo(() => {
  const theme = useTheme();
  const { t } = useTranslate();
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [transaction, setTransaction] = useState<string>('');
  const { refresh } = useContext(RefreshContext);

  const handleCreateTransaction = useCallback(async () => {
    try {
      const response = await httpClient.post(API_ENDPOINT.createTransaction, { text: transaction });
      if (response.status === 200) {
        toast('Transaction created successfully');
        refresh();
      } else toast('Transaction creation failed');
    } catch (error) {
      toast('There was an error making the request');
      console.error('There was an error making the request', error);
    }
    setToggleModal(false);
  }, [refresh, transaction]);

  return (
    <Grid2
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="space-between"
      padding="24px"
      minWidth="112px"
      maxWidth="112px"
    >
      <List sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {routes.map((listItem) => (
          <ListItemButton
            key={listItem.name}
            component={NavLink}
            to={listItem.route}
            sx={{
              width: '64px',
              padding: '24px',
              borderRadius: '100%',
              color: theme.custom.text900,
              '&.hover': {
                backgroundColor: theme.custom.primary200
              },
              '&.active': {
                backgroundColor: theme.custom.primary500
              }
            }}
          >
            {IconLibrary({ name: listItem.icon, size: '16px', color: theme.custom.text900 })}
          </ListItemButton>
        ))}
      </List>
      <Button
        onClick={() => setToggleModal(true)}
        sx={{
          padding: '24px',
          borderRadius: '100%',
          color: theme.custom.text900,
          backgroundColor: theme.custom.primary500
        }}
      >
        {IconLibrary({ name: 'AddIcon', size: '16px', color: theme.custom.text900 })}
      </Button>
      {toggleModal && (
        <CustomModal>
          <>
            <Grid2 display="flex" justifyContent="space-between" alignItems="center" width="100%">
              <Typography variant="h1" width="100%">
                Create New Transaction
              </Typography>
              <Button onClick={() => setToggleModal(false)}>
                {IconLibrary({ name: 'CloseIcon', size: '32px', color: theme.custom.text900 })}
              </Button>
            </Grid2>
            <Box width="100%" marginY="16px">
              <TextField
                variant="outlined"
                value={transaction}
                placeholder="Enter transaction"
                onChange={(e) => setTransaction(e.target.value)}
                fullWidth
              />
            </Box>
            <CustomButton variant="contained" onClick={handleCreateTransaction}>
              {t('button.create')}
            </CustomButton>
          </>
        </CustomModal>
      )}
      <ToastContainer />
    </Grid2>
  );
});
