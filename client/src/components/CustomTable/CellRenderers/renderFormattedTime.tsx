import React from 'react';
import { GridCellParams } from '@mui/x-data-grid';
import { Box } from '@mui/material';

export const renderFormattedTime = (params: GridCellParams) => {
  const { row } = params;

  if (row?.headerName === 'Time') {
    const date = new Date(row?.timeStamp);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours || 12;
    const strTime = `${hours}:${minutes} ${ampm}`;
    return <Box>{strTime}</Box>;
  } else {
    const date = new Date(row?.timeStamp);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}`;
    return <Box>{formattedDate}</Box>;
  }
};
