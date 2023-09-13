import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import CRUD from './CRUD';

const SignUp = React.lazy(() => import('./SignUp/SignUp'));
const SignIn = React.lazy(() => import('./SignIn/SignIn'));

const Registration: FC = () => {
    return (
        <Routes>
            <Route element={<SignUp />} path='signUp' />
            <Route element={<SignIn />} path='signIn' />
            <Route element={<CRUD />} path='crud' />
        </Routes>
    );
};

export default Registration;
