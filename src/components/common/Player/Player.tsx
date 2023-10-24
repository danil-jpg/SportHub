import React from 'react';
import './Player.scss';
import { BigPlayButton, ControlBar, ForwardControl, LoadingSpinner, Player, ReplayControl } from 'video-react';
import '../../../../node_modules/video-react/styles/scss/video-react.scss';

type VideoPlayerPropsType = {
    videoSrc: string;
    posterSrc?: string;
    maxWidth?: string;
};

const VideoPlayer: React.FC<VideoPlayerPropsType> = ({ videoSrc, posterSrc, maxWidth }) => {
    return (
        <div className='video-player player__player player__content-container' style={{ maxWidth: maxWidth ? maxWidth : '100%' }}>
            <Player src={videoSrc} poster={posterSrc} aspectRatio='16:9'>
                <BigPlayButton position='center' className='video-player__play-btn' />
                <LoadingSpinner />
                <ControlBar autoHide={true} className='video-player__control-bar'>
                    <ReplayControl seconds={10} />
                    <ForwardControl seconds={10} />
                </ControlBar>
            </Player>
        </div>
    );
};

export default VideoPlayer;
