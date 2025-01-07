import React from 'react';
import { Avatar, Box, Grid2, Typography, useTheme } from '@mui/material';
import { CustomGrid } from 'utils/customMUI';
import auditwiseLogo from '../../style/assets/auditwiseLogo.svg';
import { IconLibrary } from 'style/icons';

export const Header = () => {
  const theme = useTheme();

  const userName = 'John Doe';

  return (
    <CustomGrid fullWidth padding="16px 24px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px">
      <Grid2 display="flex" alignItems="center" gap="16px">
        <Box
          sx={{
            height: '48px',
            width: '48px',
            backgroundImage: `url(${auditwiseLogo})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />{' '}
        <Typography fontFamily="Manrope, serif;" fontWeight={500} fontSize={24}>
          <Box component="span" color={theme.custom.secondaryGreen}>
            Audit
          </Box>
          wise
        </Typography>
      </Grid2>
      <CustomGrid gap="8px">
        <Avatar sx={{ padding: '8px', backgroundColor: theme.custom.primary500 }}>
          {IconLibrary({ name: 'UserIcon', size: '16px', color: theme.custom.text900 })}
        </Avatar>
        {userName}
      </CustomGrid>
    </CustomGrid>
  );
};
