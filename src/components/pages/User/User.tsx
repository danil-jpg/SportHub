import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHome from './UserHome/UserHome';
import Header from '../../common/Header/Header';

const User: FC = () => {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route element={<UserHome />} path='home'></Route>
            </Routes>
        </>
    );
};

export default User;
