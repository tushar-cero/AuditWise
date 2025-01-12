import React from 'react';
import { GridCellParams } from '@mui/x-data-grid';

export const renderFormattedTime = (params: GridCellParams) => {
  const value = params.value;

  if (!value) return '-';

  try {
    const date = new Date(value);

    if (isNaN(date.getTime())) return '-';

    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  } catch (error) {
    return '-';
  }
};
