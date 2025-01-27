import React, { memo } from 'react';
import { alpha, Box, useTheme } from '@mui/material';

interface ICustomModal {
  children: React.ReactNode;
}

export const CustomModal: React.FC<ICustomModal> = memo((props: ICustomModal) => {
  const theme = useTheme();
  const { children } = props;
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        zIndex: 2,
        backgroundColor: alpha(theme.custom.text900 ?? '', 0.4)
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'end',
          backgroundColor: theme.custom.white,
          borderRadius: '8px',
          padding: '24px',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
          minWidth: '480px'
        }}
      >
        {children}
      </Box>
    </Box>
  );
});
