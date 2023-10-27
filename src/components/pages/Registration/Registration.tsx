import React, { FC } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';

const SignUp = React.lazy(() => import('./SignUp/SignUp'));
const SignIn = React.lazy(() => import('./SignIn/SignIn'));
const PersonalInfo = React.lazy(() => import('./Personalnfo/PersonalInfo'));
const ResetPassword = React.lazy(() => import('./ResetPassword/ResetPassword'));
const ChangePassword = React.lazy(() => import('./ChangePassword/ChangePassword'));
const AuthorizedUser = React.lazy(() => import('../../common/RedirectComp/AuthorizedUser'));

const Registration: FC = () => {
    return (
        <Routes>
            <Route element={<SignIn />} path='/' />
            <Route element={<SignUp />} path='signUp' />
            <Route element={<AuthorizedUser />}>
                <Route element={<PersonalInfo />} path='personalInfo' />
            </Route>
            <Route element={<ResetPassword />} path='resetPassword' />
            <Route element={<ChangePassword />} path='changePassword' />
        </Routes>
    );
};

export default Registration;
