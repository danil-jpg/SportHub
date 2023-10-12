import React from 'react';
import './Tabs.scss';

const Tabs = ({ videoArr }) => {
    return (
        <div className='tabs'>
            <div className='tabs__items'>
                <p className='tab__item'>Video</p>
                <p className='tab__item'>Bio</p>
                <p className='tab__item'>Store</p>
                <p className='tab__item'>Playlists</p>
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
