import React from 'react';
import { Box } from '@mui/material';
import { GridCellParams } from '@mui/x-data-grid';
import { generateRandomColor } from 'utils';

export const renderTags = (params: GridCellParams) => {
  const { row } = params;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        height: '36px'
      }}
    >
      {row?.tags.split(',').map((item: string) => (
        <Box
          key={item}
          sx={{
            padding: '2px 4px',
            borderRadius: '2px',
            backgroundColor: generateRandomColor,
            lineHeight: '16px',
            marginY: 'auto'
          }}
        >
          {item.trim()}
        </Box>
      ))}
    </Box>
  );
};
