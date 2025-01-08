import { styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const StyledDataGrid = styled(DataGrid)(({ theme }) => {
  return {
    border: 0,
    borderColor: 'none',
    height: 'auto',
    width: '100%',
    fontWeight: '400',
    '& .MuiDataGrid-cell': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
      //   borderBottom: `1px solid ${theme.custom.grey50}`
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
      //   color: theme.custom.textBlack,
      fontWeight: 600,

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
        // background: theme.custom.blueGrey50,
        borderRadius: '4px'
      }
    },
    '& .MuiDataGrid-columnHeadersInner': {
      //   backgroundColor: theme.custom.grey50,
      borderRadius: '6px'
    },
    '& .MuiDataGrid-row:hover': {
      backgroundColor: 'transparent'
    }
  };
});
