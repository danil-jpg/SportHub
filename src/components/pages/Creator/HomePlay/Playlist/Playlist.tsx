import React, { FC, useState } from 'react';
import './Playlist.scss';
import { IVideo } from '../../Home/CrHome';
import Video from '../../Video/Video';
import { IPlaylist } from '../HomePlay';
import { v1 } from 'uuid';
import './Playlist.scss';

const Playlist: FC<IPlaylist> = ({ title = 'Defalut Title', descr, videos }) => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className='playlist'>
            <div className='creator__playlist-line'>
                <div className='creator__playlist_title'>{title}</div>
                <div className={`${showAll ? 'active' : ''} creator__playlist_view-more`} onClick={() => setShowAll(!showAll)}>
                    View all
                </div>
            </div>
            <div className='playlist__videos'>
                {videos.map((el, index) => {
                    return showAll ? (
                        <Video key={v1()} title={el.title} previewUrl={el.previewUrl}></Video>
                    ) : index < 4 ? (
                        <Video key={v1()} title={el.title} previewUrl={el.previewUrl}></Video>
                    ) : (
                        ''
                    );
                })}
            </div>
        </div>
    );
};

export default Playlist;
