import React, { FC, useEffect, useState } from 'react';
import './Tabs.scss';
import Video from '../../../Creator/Video/Video';
import { useAppSelector } from '../../../../hooks/redux';
import { v1 } from 'uuid';
import IconRenderer from '../../../../ui/IconRenderer/IconRenderer';
import Playlist from '../../../Creator/HomePlay/Playlist/Playlist';
import { doc, getDoc } from 'firebase/firestore';
import { DB } from '../../../../../config/firebase-config';
import getDate from '../../../../utils/getDate';

const Tabs: FC = ({}) => {
    const [tabs, setTabs] = useState([true, false, false]);

    const [videos, setVideos] = useState<any[]>([]);

    const selectorEmail = useAppSelector((state) => state.creatorSlice.creatorEmail.email);
    const selectorUsers = useAppSelector((state) => state.usersSlice.data);
    const [channelData, setChannelData] = useState(selectorUsers.filter((el) => el.email === selectorEmail));

    useEffect(() => {
        const getVideos = async () => {
            try {
                const videosIds = channelData[0].videosIds;
                if (videosIds && videosIds?.length > 0) {
                    videosIds.map(async (el) => {
                        const docRef = await doc(DB, 'videos', el);
                        const getVideo = (await getDoc(docRef)).data();

                        setVideos((prev) => [...prev, { ...getVideo, videoId: el }]);
                    });
                }
            } catch (e) {
                console.error(e);
            }
        };

        getVideos();
    }, []);

    return (
        <div className='tabs'>
            <div className='tabs__items'>
                <p className={`${tabs[0] ? 'active' : ''} tab__item `} onClick={() => setTabs([true, false, false])}>
                    Video
                </p>
                <p className={`${tabs[1] ? 'active' : ''} tab__item `} onClick={() => setTabs([false, true, false])}>
                    Bio
                </p>
                <p className={`${tabs[2] ? 'active' : ''} tab__item `} onClick={() => setTabs([false, false, true])}>
                    Playlists
                </p>
            </div>
            <div className='tabs__content'>
                <div className={`${tabs[0] ? 'active' : ''} tabs__videos`}>
                    {videos
                        ? videos.map((el) => (
                              <Video
                                  key={v1()}
                                  email={el.email}
                                  title={el.title}
                                  previewUrl={el.previewUrl}
                                  fName={el.fname}
                                  lName={el.lname}
                                  date={getDate(el.date)}
                                  author={false}
                                  authorPicUrl={el.authorPicUrl}
                                  videoObj={el}
                                  videoId={el.videoId}
                              ></Video>
                          ))
                        : ''}
                </div>

                <div className={`${tabs[1] ? 'active' : ''} tabs__bio`}>
                    <div className='bio__about'>
                        <p className='bio__title'>About</p>
                        <p className='bio__descr'>{channelData[0].bio}</p>
                    </div>
                    {channelData[0].facebook || channelData[0].inst || channelData[0].twitter ? (
                        <div className='bio__social'>
                            <p className='bio__social_title'>About</p>
                            {channelData[0].facebook ? (
                                <div className='bio__social_line'>
                                    <IconRenderer id='facebook' />
                                    <p className='bio__social_text'>
                                        <a href={`${channelData[0].facebook}`}>Facebook</a>
                                    </p>
                                </div>
                            ) : (
                                ''
                            )}
                            {channelData[0].inst ? (
                                <div className='bio__social_line'>
                                    <IconRenderer id='inst' />
                                    <a href={`${channelData[0].inst}`}>Instagram</a>
                                </div>
                            ) : (
                                ''
                            )}
                            {channelData[0].twitter ? (
                                <div className='bio__social_line'>
                                    <IconRenderer id='twitter' />
                                    <a href={`${channelData[0].twitter}`}>Twitter</a>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <div className={`${tabs[2] ? 'active' : ''} tabs__playlists`}>
                    {channelData[0].playlists?.map((el, index) => {
                        return <Playlist key={index} index={index} playlist={el} type='channel'></Playlist>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Tabs;
