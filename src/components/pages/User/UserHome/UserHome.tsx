import React, { FC, Ref, useEffect, useRef, useState } from 'react';
import './UserHome.scss';
import UserItem from '../UserItem/User-item';
import { v1 } from 'uuid';
import Slider from './Slider/Slider';
import Video from '../../Creator/Video/Video';
import { doc, getDocs, collection } from 'firebase/firestore';
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

const UserHome: FC = () => {
    const [videos, setVideos] = useState<IUserData[]>([]);

    const getUsers = async () => {
        const docRef = await collection(DB, 'users');
        const getUsers = await getDocs(docRef);
        const users: any[] = getUsers.docs.map((el) => ({ ...el.data(), id: v1() }));
        // shuffleFisherYates(users);
        console.log(users);
        // console.log(shuffle(users));
        setVideos(users.filter((el) => el.videos));
    };

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        console.log(videos);
    }, [videos]);

    if (videos.length < 1) return <Loading />;
    return (
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
            <div className='user-home__right'>
                <Slider className='user-home__slider' />
                <div className='user-home__videos-section'>
                    <p className='user-home__videos_text'>Video List</p>
                    <div className='user-home__videos-wr'>
                        {videos.map((el, index) => {
                            console.log(el);
                            if (el.videos.length > 1) {
                                return el.videos.map((innerEl, innerIndex) => (
                                    <Video
                                        key={v1()}
                                        title={innerEl.title}
                                        previewUrl={innerEl.previewUrl}
                                        date={getDate(innerEl.date)}
                                        fName={el.fname}
                                        lName={el.lname}
                                        author={true}
                                        authorPicUrl={el.photoUrl}
                                    ></Video>
                                ));
                            } else {
                                return (
                                    <Video
                                        key={v1()}
                                        title={el.videos[index].title}
                                        previewUrl={el.videos[index].previewUrl}
                                        date={getDate(el.videos[index].date)}
                                        fName={el.fname}
                                        lName={el.lname}
                                        author={true}
                                        authorPicUrl={el.photoUrl}
                                    ></Video>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
