import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { Navigate, Outlet } from 'react-router-dom';

const AuthorizedUser = () => {
    const selectorRegData = useAppSelector((state) => state.regSlice.regData);

    let auth = selectorRegData.email ? true : false;
    return auth ? <Outlet /> : <Navigate to='/' />;
};

export default AuthorizedUser;
