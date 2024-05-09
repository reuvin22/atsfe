import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Login from '../pages/Auth/Login';

function Private() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn
    ? <Outlet /> 
    : <Navigate to="/login"/>
}

export default Private