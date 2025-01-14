import { Grid2, Button, styled } from '@mui/material';

interface ICustomGridProps {
  fullWidth?: boolean;
  padding?: string;
  gap?: string;
}

export const CustomGrid = styled(Grid2)<ICustomGridProps>(({ fullWidth, padding = '0px', gap = '0px' }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: fullWidth ? '100%' : 'auto',
  padding,
  gap
}));

export const CustomButton = styled(Button)(() => ({
  backgroundColor: '#C9F649',
  color: '#101010',
  padding: '8px 16px',
  textTransform: 'capitalize',
  borderRadius: '4px',
  fontSize: '14px',
  boxShadow: 'none'
}));
