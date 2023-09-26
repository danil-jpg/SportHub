import React, { FC } from 'react';
import Header from '../../common/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import AddVideo1 from './AddVideo1/AddVideo1';
import CrHome from './Home/CrHome';
import HomePlay from './HomePlay/HomePlay';
import AddVideo2 from './AddVideo2/AddVideo2';

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
                <Route element={<AddVideo1 />} path='addvideo1' />
                <Route element={<AddVideo2 />} path='addvideo2' />
            </Routes>
        </>
    );
};

export default Creator;
