import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface RequireLoginProps {
  children: React.ReactNode;
}

// RequireLogin.js
const RequireLogin: React.FC<RequireLoginProps> = ({ children }) => {
  const navigate = useNavigate();
  const role = sessionStorage.getItem('role');

  const handleTokenUpdate = () => {
    const updatedToken = sessionStorage.getItem('token');
    if (!updatedToken) {
      navigate(`/${role}/log`);
    }
  };

  useEffect(() => {
    handleTokenUpdate();

    window.addEventListener('token-updated', handleTokenUpdate);

    return () => {
      window.removeEventListener('token-updated', handleTokenUpdate);
    };
  }, [navigate]);

  return <>{children}</>;
};

export default RequireLogin;
