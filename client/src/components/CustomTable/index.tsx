import React, { useMemo } from 'react';
import { StyledDataGrid } from './StyledDataGrid';
import { CellRenderers } from './CellRenderers';

interface ModelGridPropInterface {
  rowData: any[];
  columns: any[];
  pageSize?: number;
  showCheckbox?: boolean;
}

export const CustomTable = ({ columns, rowData, pageSize = 100, showCheckbox = false }: ModelGridPropInterface) => {
  const modifiedColumns = useMemo(() => {
    if (columns && columns.length > 0) {
      return columns.map((column) => {
        const modifiedColumn = { ...column };

        if (column.renderCell) {
          modifiedColumn.renderCell = CellRenderers[column.renderCell as keyof typeof CellRenderers];
          return modifiedColumn;
        }
        return column;
      });
    }
    return [];
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
