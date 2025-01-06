import React from 'react';
import { Avatar, Box, useTheme } from '@mui/material';
import { CustomGrid } from 'utils/customMUI';

export const Header = () => {
  const theme = useTheme();
  
  const userName = 'John Doe';
  const initials = userName.split(' ').map((n) => n[0]).join('');
  
  return (
    <CustomGrid fullWidth padding='24px'>
        <Box>Logo</Box>
        <CustomGrid gap='8px'>
          <Avatar sx={{
            fontSize: '16px',
            fontWeight: 500,
            bgcolor: theme.custom.primary200,
            color: theme.custom.text900
          }}>{initials}</Avatar>
          {userName}
        </CustomGrid>
    </CustomGrid>
  )
}
