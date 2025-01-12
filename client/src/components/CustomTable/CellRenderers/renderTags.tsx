import React from 'react';
import { Box } from '@mui/material';
import { GridCellParams } from '@mui/x-data-grid';

export const renderTags = (params: GridCellParams) => {
  //   const { colDef, row } = params;
  return (
    <Box
      sx={{
        padding: '4px',
        borderRadius: '2px'
      }}
    >
      Hello
    </Box>
  );
};
