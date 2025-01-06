import React from 'react';
import { List, ListItem } from '@mui/material';

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
  return (
    <List>
      {routes.map((listItem) => (
        <ListItem key={listItem.name}>{listItem.name}</ListItem>
      ))}
    </List>
  );
};
