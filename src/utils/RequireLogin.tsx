import React, { useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface RequireLoginProps {
  children: ReactNode;
}

const RequireLogin: React.FC<RequireLoginProps> = ({ children }) => {
  const navigate = useNavigate();
  const getToken = sessionStorage.getItem('token');
  useEffect(() => {
    if (!getToken) {
      navigate('/patient/log');
    }
    console.log('aa' + getToken);
  }, []);

  return <>{children}</>;
};
export default RequireLogin;
