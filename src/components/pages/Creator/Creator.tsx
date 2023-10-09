import React, { FC } from 'react';
import Header from '../../common/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import AddVideo1 from './AddVideo1/AddVideo1';
import CrHome from './Home/CrHome';
import HomePlay from './HomePlay/HomePlay';
import CreatePlaylist from './CrPlaylist/CreatePlaylist';
import PlaylistPage from './PlaylistPage/PlaylistPage';
import EditProfile from './EditProfile/EditProfile';
import EditPlaylist from './EditPlaylist/EditPlaylist';

const Creator: FC = () => {
    // const CrHome = React.lazy(() => import('./Home/CrHome'));
    return (
        <>
            <Header></Header>
            <Routes>
                <Route element={<CrHome />} path='home' />
                <Route element={<AddVideo1 />} path='addvideo1' />
                <Route element={<HomePlay />} path='home-cr-playlist' />
                <Route element={<CreatePlaylist />} path='create-playlist' />
                <Route element={<PlaylistPage />} path='playlist' />
                <Route element={<EditPlaylist />} path='edit-playlist' />
                <Route element={<EditProfile />} path='edit-profile' />
            </Routes>
        </>
    );
};

export default Creator;
