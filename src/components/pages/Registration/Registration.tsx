import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import CRUD from './CRUD';

const SignUp = React.lazy(() => import('./SignUp/SignUp'));
const SignIn = React.lazy(() => import('./SignIn/SignIn'));
const PersonalInfo = React.lazy(() => import('./Personalnfo/PersonalInfo'));
const ResetPassword = React.lazy(() => import('./ResetPassword/ResetPassword'));

const Registration: FC = () => {
    return (
        <Routes>
            <Route element={<SignUp />} path='signUp' />
            <Route element={<PersonalInfo />} path='personalInfo' />
            <Route element={<SignIn />} path='signIn' />
            <Route element={<ResetPassword state={1} />} path='resetPassword' />
            {/* <Route element={<CRUD />} path='crud' /> */}
        </Routes>
    );
};

export default Registration;
