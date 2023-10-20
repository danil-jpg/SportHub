import React, { FC, useState, useEffect, ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHome from './UserHome/UserHome';
import Header from '../../common/Header/Header';
import UserChannel from './UserChannel/UserChannel';
import { IPlaylist } from '../Creator/HomePlay/HomePlay';
import { IVideo } from '../Creator/Home/CrHome';
import Loading from '../../common/Loading/Loading';
import getDate from '../../utils/getDate';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getUsers } from '../../store/slices/users';
import UserItem from './UserItem/UserItem';
import { v1 } from 'uuid';
import UserPlayer from './UserPlayer';
import { doc, getDoc } from 'firebase/firestore';
import { DB } from '../../../config/firebase-config';
import { setRegData } from '../../store/slices/registration';

interface IUserData {
    videos: IVideo[];
    viewLater?: IVideo[];
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
    shopify?: string;
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
    email?: string;
}

const User: FC = () => {
    const [usersData, setUsersData] = useState<any[]>([]);
    const [defaultVideos, setDefaultVideos] = useState<IShuffledVideo[]>([]);
    const [videos, setVideos] = useState<IShuffledVideo[]>([]);
    const [filterBtn, setFilterBtn] = useState<boolean[]>([true, false, false]);

    const selector = useAppSelector((state) => state.regSlice.regData);
    const selectorCreatorEmail = useAppSelector((state) => state.creatorSlice.creatorEmail.email);
    const selectorUsers = useAppSelector((state) => state.usersSlice.data);
    const dispatch = useAppDispatch();

    const defVideosshuffleVideos = (): IShuffledVideo[] => {
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

    const onViewLaterClickHandler = () => {
        selector.viewLater ? setVideos(selector?.viewLater) : setVideos([]);
    };

    useEffect(() => {
        dispatch(getUsers());

        const getVideos = async () => {
            try {
                const usersWithVideos = selectorUsers.filter((el) => el.videosIds);
                const filteredData: any[] = [];

                for (let i = 0; i < usersWithVideos.length; i++) {
                    const videosIds = usersWithVideos[i].videosIds;

                    if (videosIds && videosIds?.length > 0) {
                        videosIds.map(async (el) => {
                            const docRef = await doc(DB, 'videos', el);
                            const getVideo = (await getDoc(docRef)).data();
                            setVideos((prev: any) => [
                                ...prev,
                                { ...getVideo, videoId: el, fname: usersWithVideos[i].fname, lname: usersWithVideos[i].lname, authorPicUrl: usersWithVideos[i].photoUrl },
                            ]);

                            setDefaultVideos((prev: any) => [
                                ...prev,
                                { ...getVideo, videoId: el, fname: usersWithVideos[i].fname, lname: usersWithVideos[i].lname, authorPicUrl: usersWithVideos[i].photoUrl },
                            ]);
                        });
                    }
                }
            } catch (e) {
                console.error(e);
            }
        };

        getVideos();

        defVideosshuffleVideos();
    }, []);

    useEffect(() => {
        defVideosshuffleVideos();
    }, [usersData]);

    useEffect(() => {
        dispatch(
            setRegData({
                videos: defaultVideos,
            }),
        );
    }, [defaultVideos]);

    const Subscribers = (): JSX.Element[] | undefined => {
        const currentUser = selectorUsers.filter((el) => el.email === selector.email)[0];
        return currentUser?.subscriptions?.map((el) => {
            const currentCreator = selectorUsers.filter((innerEl) => innerEl.email === el);
            return (
                <UserItem
                    key={v1()}
                    email={currentCreator[0].email}
                    name={currentCreator[0].fname ? currentCreator[0].fname : ''}
                    imgUrl={currentCreator[0].photoUrl ? currentCreator[0].photoUrl : ''}
                />
            );
        });
    };

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
                                onViewLaterClickHandler();
                                setFilterBtn([false, false, true]);
                            }}
                        >
                            View later
                        </p>
                    </div>
                    <div className='user-home__subscriptions'>
                        <p className='user-home__subscriptions_title'>My subscription</p>
                        {Subscribers()}
                    </div>
                </div>
                <Routes>
                    <Route element={<UserHome videos={videos} setVideos={setVideos} />} index path='home'></Route>
                    <Route element={<UserChannel />} path='channel/*'></Route>
                </Routes>
            </div>
        </>
    );
};

export default User;
export type { IShuffledVideo, IUserData };
