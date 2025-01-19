import React, { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'common/constants';

export const Logout = memo(() => {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
      navigate('/login');
    } catch {
      navigate('/login');
    }
  }, []);
  return <div />;
});
