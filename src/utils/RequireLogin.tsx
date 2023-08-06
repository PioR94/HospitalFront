import React, { useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from './variables';

interface RequireLoginProps {
  children: ReactNode;
}

const RequireLogin: React.FC<RequireLoginProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken) {
      navigate('/patient/log');
    }
  }, []);

  return <>{children}</>;
};
export default RequireLogin;
