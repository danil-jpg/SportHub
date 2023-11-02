import React, { FC } from 'react';
import './UserHome.scss';
import { v1 } from 'uuid';
import Slider from './Slider/Slider';
import Video from '../../Creator/Video/Video';
import getDate from '../../../utils/getDate';
import { IShuffledVideo } from '../User';

interface IUserHome {
    videos: IShuffledVideo[];
    setVideos: React.Dispatch<React.SetStateAction<IShuffledVideo[]>>;
}

const UserHome: FC<IUserHome> = ({ videos, setVideos }) => {
    return (
        <div className='user-home__right'>
            <Slider className='user-home__slider' setVideos={setVideos} />
            <div className='user-home__videos-section'>
                <p className='user-home__videos_text'>Video List</p>
                <div className='user-home__videos-wr'>
                    {videos
                        ? videos.map((el) => {
                              return (
                                  <Video
                                      key={v1()}
                                      email={el.email}
                                      title={el.title}
                                      previewUrl={el.previewUrl}
                                      date={getDate(el.date)}
                                      fName={el.fname}
                                      lName={el.lname}
                                      author={true}
                                      authorPicUrl={el.authorPicUrl}
                                      videoObj={el}
                                      videoId={el.videoId}
                                  ></Video>
                              );
                          })
                        : ''}
                </div>
            </div>
        </div>
    );
};

export default UserHome;
