import React, { useMemo } from 'react';
import { Box, useTheme } from '@mui/material';
import { IconLibrary } from 'style/icons';
import { StyledDataGrid } from './StyledDataGrid';
import { CellRenderers } from './CellRenderers';

interface ModelGridPropInterface {
  rowData: any[];
  columns: any[];
  pageSize?: number;
  showCheckbox?: boolean;
}

export const CustomTable = ({ columns, rowData, pageSize = 100, showCheckbox = false }: ModelGridPropInterface) => {
  const theme = useTheme();

  const modifiedColumns = useMemo(() => {
    if (columns && columns.length > 0) {
      return columns.map((column) => {
        const modifiedColumn = { ...column };

        if (column.renderCell) {
          modifiedColumn.renderCell = CellRenderers[column.renderCell as keyof typeof CellRenderers];
          return modifiedColumn;
        }
        if (column.headerIcon) {
          modifiedColumn.renderHeader = (
            <Box display="flex" gap="4px" alignItems="center">
              {IconLibrary({ name: column?.headerIcon, size: '16px', color: theme.custom.text900 })} {column.headerName}
            </Box>
          );
        }
        return column;
      });
    }
    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns]);

  return (
    <StyledDataGrid
      rows={rowData}
      columns={modifiedColumns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize
          }
        }
      }}
      checkboxSelection={showCheckbox}
      disableRowSelectionOnClick
      disableColumnFilter
      density="compact"
      disableColumnMenu
      hideFooter
    />
  );
};
