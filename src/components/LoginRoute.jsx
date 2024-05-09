import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Login from '../pages/Auth/Login';

function LoginRoute() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return !isLoggedIn
    ? <Outlet /> 
    : <Navigate to="/dashboard"/>
}

export default LoginRoute