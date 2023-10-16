import React, { FC, useState } from 'react';
import './Tabs.scss';
import Video from '../../../Creator/Video/Video';
import { useAppSelector } from '../../../../hooks/redux';
import { v1 } from 'uuid';

const Tabs: FC = ({}) => {
    const [tabs, setTabs] = useState([true, false, false, false]);

    const selectorEmail = useAppSelector((state) => state.creatorSlice.creatorEmail.email);
    const selectorUsers = useAppSelector((state) => state.usersSlice.data);
    const [channelData, setChannelData] = useState(selectorUsers.filter((el) => el.email === selectorEmail));

    return (
        <div className='tabs'>
            <div className='tabs__items'>
                <p className={`${tabs[0] ? 'active' : ''} tab__item `} onClick={() => setTabs([true, false, false, false])}>
                    Video
                </p>
                <p className={`${tabs[1] ? 'active' : ''} tab__item `} onClick={() => setTabs([false, true, false, false])}>
                    Bio
                </p>
                <p className={`${tabs[2] ? 'active' : ''} tab__item `} onClick={() => setTabs([false, false, true, false])}>
                    Store
                </p>
                <p className={`${tabs[3] ? 'active' : ''} tab__item `} onClick={() => setTabs([false, false, false, true])}>
                    Playlists
                </p>
            </div>
            <div className='tabs__content'>
                <div className={`${tabs[0] ? 'active' : ''} tabs__videos`}>
                    {channelData[0].videos ? channelData[0].videos.map((el) => <Video key={v1()} title={el.title} previewUrl={el.previewUrl}></Video>) : ''}
                </div>
                <div className={`${tabs[1] ? 'active' : ''} tabs__bio`}></div>
                <div className='tabs__playlists'></div>
            </div>
        </div>
    );
};

export default Tabs;
