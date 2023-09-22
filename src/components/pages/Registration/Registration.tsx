import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import CRUD from './CRUD';

const SignUp = React.lazy(() => import('./SignUp/SignUp'));
const SignIn = React.lazy(() => import('./SignIn/SignIn'));
const PersonalInfo = React.lazy(() => import('./Personalnfo/PersonalInfo'));
const ResetPassword = React.lazy(() => import('./ResetPassword/ResetPassword'));
const ChangePassword = React.lazy(() => import('./ChangePassword/ChangePassword'));

const Registration: FC = () => {
    return (
        <Routes>
            <Route element={<SignUp />} path='signUp' />
            <Route element={<PersonalInfo />} path='personalInfo' />
            <Route element={<SignIn />} path='signIn' />
            <Route element={<ResetPassword />} path='resetPassword' />
            <Route element={<ChangePassword />} path='changePassword' />
            {/* <Route element={<CRUD />} path='crud' /> */}
        </Routes>
    );
};

export default Registration;
