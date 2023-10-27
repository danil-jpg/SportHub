import React, { FC } from 'react';
import Header from '../../common/Header/Header';
import { Routes, Route } from 'react-router-dom';

const AddVideo1 = React.lazy(() => import('./AddVideo1/AddVideo1'));
const CrHome = React.lazy(() => import('./Home/CrHome'));
const HomePlay = React.lazy(() => import('./HomePlay/HomePlay'));
const CreatePlaylist = React.lazy(() => import('./CrPlaylist/CreatePlaylist'));
const PlaylistPage = React.lazy(() => import('./PlaylistPage/PlaylistPage'));
const EditProfile = React.lazy(() => import('./EditProfile/EditProfile'));
const EditPlaylist = React.lazy(() => import('./EditPlaylist/EditPlaylist'));

const Creator: FC = () => {
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
