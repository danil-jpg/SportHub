import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

const SignUp = React.lazy(() => import('./SignUp/SignUp'));
const SignIn = React.lazy(() => import('./SignIn/SignIn'));
const PersonalInfo = React.lazy(() => import('./Personalnfo/PersonalInfo'));
const ResetPassword = React.lazy(() => import('./ResetPassword/ResetPassword'));
const ChangePassword = React.lazy(() => import('./ChangePassword/ChangePassword'));

const Registration: FC = () => {
    return (
        <Routes>
            <Route element={<SignUp />} path='signUp' />
            <Route element={<SignIn />} path='signIn' />
            <Route element={<PersonalInfo />} path='personalInfo' />
            <Route element={<ResetPassword />} path='resetPassword' />
            <Route element={<ChangePassword />} path='changePassword' />
        </Routes>
    );
};

export default Registration;
