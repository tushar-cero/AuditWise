import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Grid2, List, ListItemButton, useTheme } from '@mui/material';
import { IconLibrary } from 'style/icons';

const routes = [
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

export const Sidebar = () => {
  const theme = useTheme();
  return (
    <Grid2 display="flex" flexDirection="column" height="100%" justifyContent="space-between" padding="24px">
      <List sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {routes.map((listItem) => (
          <ListItemButton
            key={listItem.name}
            component={NavLink}
            to={listItem.route}
            sx={{
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
        sx={{
          padding: '24px',
          borderRadius: '100%',
          color: theme.custom.text900,
          backgroundColor: theme.custom.primary500
        }}
      >
        {IconLibrary({ name: 'AddIcon', size: '16px', color: theme.custom.text900 })}
      </Button>
    </Grid2>
  );
};
