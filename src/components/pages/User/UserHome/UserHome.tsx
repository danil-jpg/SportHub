import React, { FC, Ref, SetStateAction, useEffect, useRef, useState } from 'react';
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
import { IShuffledVideo } from '../User';

interface IUserHome {
    videos: IShuffledVideo[];
    setVideos: React.Dispatch<React.SetStateAction<IShuffledVideo[]>>;
}

const UserHome: FC<IUserHome> = ({ videos, setVideos }) => {
    return (
        <div className='user-home__right'>
            <Slider className='user-home__slider' videosArr={videos} setVideos={setVideos} />
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
