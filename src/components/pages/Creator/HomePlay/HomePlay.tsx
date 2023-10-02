import React, { FC } from 'react';
import Button from '../../../ui/Button/Button';
import IconRenderer from '../../../ui/IconRenderer/IconRenderer';
import '../CrHome.scss';
import Video from '../Video/Video';
import { useNavigate } from 'react-router-dom';
import Playlist from './Playlist/Playlist';

const HomePlay = () => {
    const navigate = useNavigate();

    return (
        <div className='creator-container creator creator-playlist'>
            <div className='creator__top'>
                <div className='creator__video-play-tabs'>
                    <div className='creator__tab creator__video_tab' onClick={() => navigate('../home')}>
                        Your video
                    </div>
                    <div className='creator__tab creator__play_tab active'>Playlists</div>
                </div>
                <Button className='creator__add-video-btn'>
                    <IconRenderer id='plus' className='creator__add-video-svg' />
                    Create new playlist
                </Button>
            </div>
            <Playlist></Playlist>
        </div>
    );
};

export default HomePlay;
