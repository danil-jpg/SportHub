import React, { FC, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHome from './UserHome/UserHome';
import Header from '../../common/Header/Header';
import UserChannel from './UserChannel/UserChannel';
import UserItem from './UserItem/User-item';
import { IPlaylist } from '../Creator/HomePlay/HomePlay';
import { IVideo } from '../Creator/Home/CrHome';
import { getDocs, collection } from 'firebase/firestore';
import { DB } from '../../../config/firebase-config';
import Loading from '../../common/Loading/Loading';
import getDate from '../../utils/getDate';
import { v1 } from 'uuid';

interface IUserData {
    videos: IVideo[];
    fname: string;
    lname: string;
    email: string;
    password: string;
    file?: string;
    type?: string;
    photoUrl?: string;
    birthday?: string | number;
    gender?: string;
    playlists?: IPlaylist[];
    date?: string;
    bio?: string;
    vimeo?: string;
    inst?: string;
    twitter?: string;
    facebook?: string;
    shopify: string;
}

interface IShuffledVideo {
    category: string;
    descr: string;
    previewUrl: string;
    shopify: string;
    title: string;
    videoUrl: string;
    date?: any;
    fname: string;
    lname: string;
    authorPicUrl?: string;
}

const User: FC = () => {
    const [usersData, setUsersData] = useState<IUserData[]>([]);
    const [defaultVideos, setDefaultVideos] = useState<IShuffledVideo[]>([]);
    const [videos, setVideos] = useState<IShuffledVideo[]>([]);
    const [filterBtn, setFilterBtn] = useState<boolean[]>([true, false, false]);

    const getUsers = async () => {
        const docRef = await collection(DB, 'users');
        const getUsers = await getDocs(docRef);
        const users: any[] = getUsers.docs.map((el) => ({ ...el.data(), id: v1() }));
        setUsersData(users.filter((el) => el.videos));
    };

    const getAllTheusersVideosAndShuffleIt = (): IShuffledVideo[] => {
        for (let i = 0; i < usersData.length; i++) {
            for (let j = 0; j < usersData[i].videos.length; j++) {
                setVideos((prev) => [...prev, { ...usersData[i].videos[j], fname: usersData[i].fname, lname: usersData[i].lname, authorPicUrl: usersData[i].photoUrl }]);
                setDefaultVideos((prev) => [...prev, { ...usersData[i].videos[j], fname: usersData[i].fname, lname: usersData[i].lname, authorPicUrl: usersData[i].photoUrl }]);
            }
        }
        setVideos((prev) => {
            const copyArr = [...prev];
            copyArr.sort(() => Math.random() - 0.5);
            return (prev = copyArr);
        });

        return videos;
    };

    const onHomeFilterClickHandler = () => {
        setVideos((prev) => {
            prev = defaultVideos;
            const copyArr = [...prev];
            copyArr.sort(() => Math.random() - 0.5);
            return (prev = copyArr);
        });
        return videos;
    };
    //
    const onLatestFilterClickHandler = () => {
        setVideos((prev) => {
            prev = defaultVideos;
            let copyArr = [...prev];
            copyArr.sort((a, b) => {
                return getDate(a.date) - getDate(b.date);
            });
            return (prev = copyArr);
        });
    };

    useEffect(() => {
        getUsers();
        getAllTheusersVideosAndShuffleIt();
    }, []);

    useEffect(() => {
        getAllTheusersVideosAndShuffleIt();
    }, [usersData]);

    if (defaultVideos.length < 1) return <Loading />;
    return (
        <>
            <Header></Header>
            <div className='user-home user-home__container'>
                <div className='user-home__left'>
                    <div className='user-home__filters-wr'>
                        <p
                            className={`${filterBtn[0] ? ' active' : ''} user-home__filter`}
                            onClick={() => {
                                onHomeFilterClickHandler();
                                setFilterBtn([true, false, false]);
                            }}
                        >
                            Home
                        </p>
                        <p
                            className={`${filterBtn[1] ? ' active' : ''} user-home__filter`}
                            onClick={() => {
                                onLatestFilterClickHandler();
                                setFilterBtn([false, true, false]);
                            }}
                        >
                            Latest
                        </p>
                        <p
                            className={`${filterBtn[2] ? ' active' : ''} user-home__filter`}
                            onClick={() => {
                                onLatestFilterClickHandler();
                                setFilterBtn([false, false, true]);
                            }}
                        >
                            View later
                        </p>
                    </div>
                    <div className='user-home__subscriptions'>
                        <p className='user-home__subscriptions_title'>My subscription</p>
                        {/* <UserItem name='Marvin McKinney' />
                        <UserItem name='Marvin McKinney' /> */}
                    </div>
                </div>
                <Routes>
                    <Route element={<UserHome videos={videos} setVideos={setVideos} />} index path='home'></Route>
                    <Route element={<UserChannel videosArr={defaultVideos} />} index path='channel'></Route>
                </Routes>
            </div>
        </>
    );
};

export default User;
export type { IShuffledVideo, IUserData };
