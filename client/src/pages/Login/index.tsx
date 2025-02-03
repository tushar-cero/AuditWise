import React, { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TextField, Box, Grid2, Typography, useTheme, FormGroup } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { CustomButton } from 'utils/customMUI';

import { ACCESS_TOKEN, REFRESH_TOKEN, API_ENDPOINT } from 'common/constants';
import httpClient from 'services/httpClient';
import { useTranslate } from 'hooks/useTranslate';

interface ILoginForm {
  username: string;
  password: string;
}

export const Login: React.FC = memo(() => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslate();
  const classes = {
    root: {
      height: '100vh',
      width: '100vw'
    },
    subRoot: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50vw',
      height: '100vh'
    },
    image: {
      backgroundImage: 'url(https://img.freepik.com/free-photo/3d-rendering-money-tree_23-2151575345.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      width: '50vw',
      height: '100vh'
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '400px'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.custom.primary500
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  };

  const [loginFormData, setLoginFormData] = useState<ILoginForm>({
    username: '',
    password: ''
  });

  const handleLoginFormSubmission = useCallback(
    async (e: any) => {
      e.preventDefault();
      if (loginFormData.username === '' || loginFormData.password === '') {
        toast('No data entered.');
      } else {
        console.log('loginFormData', loginFormData);
        try {
          const response: any = await httpClient.post(API_ENDPOINT.login, loginFormData);
          if (response.status === 200) {
            localStorage.setItem(ACCESS_TOKEN, response?.data?.access);
            localStorage.setItem(REFRESH_TOKEN, response?.data?.refresh);
          }
          toast('Successfully logged in. Navigating to dashboard.');
          setTimeout(() => navigate('/dashboard'), 2000);
        } catch (error) {
          toast('Incorrect username or password.');
          console.error('There was an error making the request', error);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loginFormData]
  );

  return (
    <>
      <Grid2 container component="main" sx={classes?.root}>
        <Grid2 sx={classes?.subRoot}>
          <Box sx={classes?.paper}>
            <Typography component="h1" variant="h5">
              {t('title.signIn')}
            </Typography>
            <FormGroup sx={classes?.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Email Address"
                name="username"
                autoComplete="username"
                autoFocus
                value={loginFormData.username}
                onChange={(e) => setLoginFormData((prev) => ({ ...prev, username: e.target.value }))}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={loginFormData.password}
                onChange={(e) => setLoginFormData((prev) => ({ ...prev, password: e.target.value }))}
              />
              <CustomButton onClick={handleLoginFormSubmission} sx={classes?.submit}>
                {t('button.signIn')}
              </CustomButton>
            </FormGroup>
          </Box>
        </Grid2>
        <Box sx={classes?.image} />
      </Grid2>
      <ToastContainer />
    </>
  );
});
