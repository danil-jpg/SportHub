import React, { FC, Ref, useEffect, useRef, useState } from 'react';
import './UserHome.scss';
import { v1 } from 'uuid';
import Slider from './Slider/Slider';
import Video from '../../Creator/Video/Video';
import { getDocs, collection } from 'firebase/firestore';
import { DB } from '../../../../config/firebase-config';
import { IVideo } from '../../Creator/Home/CrHome';
import Loading from '../../../common/Loading/Loading';
import getDate from '../../../utils/getDate';
import { IPlaylist } from '../../Creator/HomePlay/HomePlay';

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

const UserHome: FC = () => {
    const [usersData, setUsersData] = useState<IUserData[]>([]);
    const [videos, setVideos] = useState<IShuffledVideo[]>([]);

    const getUsers = async () => {
        const docRef = await collection(DB, 'users');
        const getUsers = await getDocs(docRef);
        const users: any[] = getUsers.docs.map((el) => ({ ...el.data(), id: v1() }));
        setUsersData(users.filter((el) => el.videos));
    };
    //
    const getAllTheusersVideosAndShuffleIt = (): IShuffledVideo[] => {
        for (let i = 0; i < usersData.length; i++) {
            for (let j = 0; j < usersData[i].videos.length; j++) {
                setVideos((prev) => [...prev, { ...usersData[i].videos[j], fname: usersData[i].fname, lname: usersData[i].lname, authorPicUrl: usersData[i].photoUrl }]);
            }
        }
        setVideos((prev) => prev.sort(() => Math.random() - 0.5));
        return videos;
    };

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        getAllTheusersVideosAndShuffleIt();
    }, [usersData]);

    if (usersData.length < 1) return <Loading />;
    return (
        <div className='user-home__right'>
            <Slider className='user-home__slider' />
            <div className='user-home__videos-section'>
                <p className='user-home__videos_text'>Video List</p>
                <div className='user-home__videos-wr'>
                    {videos.map((el, index) => {
                        return (
                            <Video
                                key={v1()}
                                title={el.title}
                                previewUrl={el.previewUrl}
                                date={getDate(el.date)}
                                fName={el.fname}
                                lName={el.lname}
                                author={true}
                                authorPicUrl={el.authorPicUrl}
                            ></Video>
                        );
                        //     if (el.videos.length > 1) {
                        //         return el.videos.map((innerEl, innerIndex) => (
                        //             <Video
                        //                 key={v1()}
                        //                 title={innerEl.title}
                        //                 previewUrl={innerEl.previewUrl}
                        //                 date={getDate(innerEl.date)}
                        //                 fName={el.fname}
                        //                 lName={el.lname}
                        //                 author={true}
                        //                 authorPicUrl={el.photoUrl}
                        //             ></Video>
                        //         ));
                        //     } else {
                        //         return (
                        //             <Video
                        //                 key={v1()}
                        //                 title={el.videos[index].title}
                        //                 previewUrl={el.videos[index].previewUrl}
                        //                 date={getDate(el.videos[index].date)}
                        //                 fName={el.fname}
                        //                 lName={el.lname}
                        //                 author={true}
                        //                 authorPicUrl={el.photoUrl}
                        //             ></Video>
                        //         );
                        // }
                    })}
                </div>
            </div>
        </div>
    );
};

export default UserHome;
