import { styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const StyledDataGrid = styled(DataGrid)(({ theme }) => {
  return {
    border: 0,
    borderColor: 'none',
    fontFamily: 'Inter, sans-serif',
    height: 'auto',
    width: '100%',
    fontWeight: '400',
    '& .MuiDataGrid-cell': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      height: '36px',
      borderRight: `1px solid ${theme.custom.border}`,
      borderBottom: `1px solid ${theme.custom.border}`
    },
    '& .MuiDataGrid-cell:hover': {
      color: 'none'
    },
    '& .MuiDataGrid-cell:focus-within': {
      outline: 'none !important'
    },
    '& .MuiDataGrid-columnHeader:focus-within': {
      outline: 'none !important'
    },
    '& .MuiDataGrid-columnHeader': {
      fontWeight: 600,
      border: 'none',
      '&[data-field="__check__"]': {
        '.MuiDataGrid-columnSeparator': {
          display: 'none'
        }
      }
    },
    '& .MuiDataGrid-columnHeader--sorted': {
      opacity: 1
    },
    '& .MuiDataGrid-columnHeaders': {
      borderBottom: 'none'
    },
    '& .MuiDataGrid-actionsCell': {
      '&:hover': {
        borderRadius: '4px'
      }
    },
    '& .MuiDataGrid-columnHeadersInner': {
      borderRadius: '6px'
    },
    '& .MuiDataGrid-row:hover': {
      backgroundColor: 'transparent'
    }
  };
});
