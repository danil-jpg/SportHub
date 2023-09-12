import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

const SignUp = React.lazy(() => import('./SignUp/SignUp'));

const Registration: FC = () => {
    return (
        <Routes>
            <Route element={<SignUp />} path='signUp' />
        </Routes>
    );
};

export default Registration;
