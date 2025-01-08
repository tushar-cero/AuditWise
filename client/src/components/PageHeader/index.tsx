import { Grid2, SxProps, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface IPageHeader {
  pageTitle: string;
  customWidget?: ReactNode;
  sx?: SxProps;
}

export const PageHeader = ({ pageTitle, customWidget, sx }: IPageHeader) => {
  return (
    <Grid2
      sx={{
        display: 'flex',
        justifyContent: customWidget ? 'space-between' : 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 'min-content',
        ...sx
      }}
    >
      <Typography variant="h1">{pageTitle}</Typography>
      {customWidget}
    </Grid2>
  );
};
