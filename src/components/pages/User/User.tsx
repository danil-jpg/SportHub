import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHome from './UserHome/UserHome';
import Header from '../../common/Header/Header';
import UserChannel from './UserChannel/UserChannel';

const User: FC = () => {
    return (
        <>
            <Header></Header>
            <div className='user-home user-home__container'>
                <div className='user-home__left'>
                    <div className='user-home__filters-wr'>
                        <p className='user-home__filter active'>Home</p>
                        <p className='user-home__filter'>Latest</p>
                        <p className='user-home__filter'>View later </p>
                    </div>
                    <div className='user-home__subscriptions'>
                        <p className='user-home__subscriptions_title'>My subscription</p>
                        {/* <UserItem name='Marvin McKinney' />
                    <UserItem name='Marvin McKinney' /> */}
                    </div>
                </div>
                <Routes>
                    <Route element={<UserHome />} index path='home'></Route>
                    <Route element={<UserChannel />} index path='channel'></Route>
                </Routes>
            </div>
        </>
    );
};

export default User;
