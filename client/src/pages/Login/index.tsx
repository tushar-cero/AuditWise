import React from 'react';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid2, Typography, useTheme, FormGroup } from '@mui/material';


export const Login: React.FC = () => {
  const theme = useTheme();
  const classes = {
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.custom.white,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.custom.primary500,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  };

  return (
    <Grid2 container component="main" sx={classes.?root}>
      <Box sx={classes.?image} />
      <Grid2>
        <Box sx={classes.?paper}>
          <Avatar sx={classes.?avatar}>
            Lock
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <FormGroup sx={classes.?form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={classes.?submit}
            >
              Sign In
            </Button>
            <Grid2 container>
              <Grid2>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid2>
              <Grid2>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid2>
            </Grid2>
          </FormGroup>
        </Box>
      </Grid2>
    </Grid2>
  );
};
