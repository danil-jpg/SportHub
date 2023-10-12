import React, { FC, useState } from 'react';
import './Tabs.scss';
import { IVideo } from '../../../Creator/Home/CrHome';
import Video from '../../../Creator/Video/Video';

interface ITab {
    videosArr: IVideo[];
}

const Tabs: FC<ITab> = ({ videosArr }) => {
    const [tabs, setTabs] = useState([true, false, false, false]);

    return (
        <div className='tabs'>
            <div className='tabs__items'>
                <p className={`${tabs[0] ? 'active' : ''} tab__item `} onClick={() => setTabs([false, true, false, false])}>
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
                <div className='tabs__videos'>
                    {videosArr.map((el) => (
                        <Video title={el.title} previewUrl={el.previewUrl}></Video>
                    ))}
                </div>
                <div className='tabs__bio'></div>
                <div className='tabs__playlists'></div>
            </div>
        </div>
    );
};

export default Tabs;
