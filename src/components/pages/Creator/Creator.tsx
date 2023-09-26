import React, { FC } from 'react';
import Header from '../../common/Header/Header';
import { Routes, Route } from 'react-router-dom';
import CrHome from './Home/CrHome';
import HomePlay from './HomePlay/HomePlay';
import { useAppSelector } from '../../hooks/redux';

const Creator: FC = () => {
    // const CrHome = React.lazy(() => import('./Home/CrHome'));

    const selector = useAppSelector((state) => state.regSlice.regData);
    console.log(selector);
    return (
        <>
            <Header auth={true}></Header>
            <Routes>
                <Route element={<CrHome />} path='home' />
                <Route element={<HomePlay />} path='home-cr-playlist' />
            </Routes>
        </>
    );
};

export default Creator;
