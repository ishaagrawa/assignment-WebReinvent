import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const isAuthenticated = useUserStore((state: { isAuthenticated: boolean }) => state.isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
