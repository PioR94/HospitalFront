import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface RequireLoginProps {
  children: React.ReactNode;
  requiredRole?: string;
}

const RequireLogin: React.FC<RequireLoginProps> = ({ children, requiredRole }) => {
  const navigate = useNavigate();

  const checkTokenAndRole = () => {
    const token = sessionStorage.getItem('token');
    const role = sessionStorage.getItem('role');

    if (!token) {
      navigate(`/${role}/log`);
      return;
    }

    if (requiredRole && role !== requiredRole) {
      navigate('/');
      return;
    }
  };

  useEffect(() => {
    checkTokenAndRole();

    const handleTokenUpdate = () => {
      checkTokenAndRole();
    };

    window.addEventListener('token-updated', handleTokenUpdate);

    return () => {
      window.removeEventListener('token-updated', handleTokenUpdate);
    };
  }, [navigate, requiredRole]);

  return <>{children}</>;
};

export default RequireLogin;
