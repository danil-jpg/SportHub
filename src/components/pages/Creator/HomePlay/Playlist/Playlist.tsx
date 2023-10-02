import React, { FC } from 'react';
import './Playlist.scss';
import { IVideo } from '../../Home/CrHome';
import Video from '../../Video/Video';

interface IPlaylist {
    title: string;
    descr: string;
    videoArr?: IVideo[];
}

const Playlist: FC<IPlaylist> = ({ title = 'Defalut Title' }) => {
    return (
        <div className='playlist'>
            <div className='creator__playlist-line'>
                <div className='creator__playlist_title'>{title}</div>
                <div className='creator__playlist_view-more'>View all</div>
            </div>
            <div className='playlist__videos'>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
            </div>
        </div>
    );
};

export default Playlist;
