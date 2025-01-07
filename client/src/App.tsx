import React, { FC, useState } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from 'utils/routes';
import { ThemeProvider } from '@mui/material';
import { generateTheme } from 'style/theme';

export const App: FC = () => {
  const [registerUserFormData, setRegisterUserFormData] = useState({
    username: '',
    password: ''
  });
  const [loginUserFormData, setLoginUserFormData] = useState({
    username: '',
    password: ''
  });
  const [transactionFormData, setTransactionFormData] = useState<string>('');

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    console.log('Sign up button clicked');
    try {
      await axios.post('http://127.0.0.1:8000/api/user/register/', registerUserFormData);
    } catch (error) {
      console.log('There was an error making the request');
    }
  };
  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log('Log-in button clicked');
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/token/', loginUserFormData);
      console.log('Response:', response);
      localStorage.setItem('AccessToken', JSON.stringify(response.data.access));
      localStorage.setItem('RefreshToken', JSON.stringify(response.data.refresh));
    } catch (error) {
      console.log('There was an error making the request');
    }
  };
  const handleTransaction = async (e: any) => {
    e.preventDefault();
    console.log('Log-in button clicked');
    const storedAcessToken = localStorage.getItem('AccessToken')?.replace(/['"]+/g, '');
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/transactions/create/',
        { text: transactionFormData },
        {
          headers: {
            Authorization: `Bearer ${storedAcessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );
    } catch (error) {
      console.log('There was an error making the request');
    }
  };

  return (
    <>
      <ThemeProvider theme={generateTheme('light', 'App')}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
      <form>
        <h1>Register User</h1>
        <input
          name="username"
          type="text"
          value={registerUserFormData.username}
          onChange={(e) => setRegisterUserFormData({ ...registerUserFormData, username: e.target.value })}
        />
        <input
          name="password"
          type="password"
          value={registerUserFormData.password}
          onChange={(e) => setRegisterUserFormData({ ...registerUserFormData, password: e.target.value })}
        />
        <button onClick={handleSignUp}>Create User</button>
      </form>
      <form>
        <h1>Login</h1>
        <input
          name="username"
          type="text"
          value={loginUserFormData.username}
          onChange={(e) => setLoginUserFormData({ ...loginUserFormData, username: e.target.value })}
        />
        <input
          name="password"
          type="password"
          value={loginUserFormData.password}
          onChange={(e) => setLoginUserFormData({ ...loginUserFormData, password: e.target.value })}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
      <div>
        <h1>Enter transaction</h1>
        <input
          name="transaction"
          type="text"
          value={transactionFormData}
          onChange={(e) => setTransactionFormData(e.target.value)}
        />
        <button onClick={handleTransaction}>Submit</button>
      </div>
      <div>
        <h1>View Transactions</h1>
        {}
      </div>
    </>
  );
};
