import React, { FC, useState } from 'react';
import './Tabs.scss';
import Video from '../../../Creator/Video/Video';
import { useAppSelector } from '../../../../hooks/redux';
import { v1 } from 'uuid';
import IconRenderer from '../../../../ui/IconRenderer/IconRenderer';

const Tabs: FC = ({}) => {
    const [tabs, setTabs] = useState([true, false, false]);

    const selectorEmail = useAppSelector((state) => state.creatorSlice.creatorEmail.email);
    const selectorUsers = useAppSelector((state) => state.usersSlice.data);
    const [channelData, setChannelData] = useState(selectorUsers.filter((el) => el.email === selectorEmail));

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
                    {channelData[0].videos ? channelData[0].videos.map((el) => <Video key={v1()} title={el.title} previewUrl={el.previewUrl}></Video>) : ''}
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
                    <div>hey2</div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
