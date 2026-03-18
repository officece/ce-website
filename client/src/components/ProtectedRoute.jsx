// client/src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { token } = useAuth();

  // If no token exists, redirect to the login page immediately
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // If token exists, render the child routes (the Admin Dashboard)
  return <Outlet />;
};

export default ProtectedRoute;