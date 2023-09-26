import React, { FC } from 'react';
import Button from '../../../ui/Button/Button';
import IconRenderer from '../../../ui/IconRenderer/IconRenderer';
import '../CrHome.scss';
import Video from '../Video/Video';

const HomePlay = () => {
    return (
        <div className='creator-container creator creator-playlist'>
            <div className='creator__top'>
                <div className='creator__video-play-tabs'>
                    <div className='creator__tab creator__video_tab active'>Your video</div>
                    <div className='creator__tab creator__play_tab'>Playlists</div>
                </div>
                <Button className='creator__add-video-btn'>
                    <IconRenderer id='plus' className='creator__add-video-svg' />
                    Create new playlist
                </Button>
            </div>
            <div className='creator__types'>
                <div className='creator__type active creator__type_mind'>Mind</div>
                <div className='creator__type creator__type_body'>Body</div>
                <div className='creator__type creator__type_soul'>Soul</div>
            </div>
            <div className='creator__playlist-line'>
                <div className='creator__playlist_title'>Fitness training</div>
                <div className='creator__playlist_view-more'>View all</div>
            </div>
            <div className='creator__videos'>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
            </div>
        </div>
    );
};

export default HomePlay;
