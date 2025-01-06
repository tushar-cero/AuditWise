import { Grid2, styled } from "@mui/material";

interface ICustomGridProps {
  fullWidth?: boolean;
  padding?: string;
  gap?: string;
}

export const CustomGrid = styled(Grid2)<ICustomGridProps>(({ fullWidth, padding='0px', gap='0px' }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: fullWidth? '100%': 'auto',
  padding, 
  gap
}));
