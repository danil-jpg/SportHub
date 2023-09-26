import React, { FC } from 'react';
import Header from '../../common/Header/Header';
import { Routes, Route } from 'react-router-dom';
import CrHome from './Home/CrHome';
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
            </Routes>
        </>
    );
};

export default Creator;
