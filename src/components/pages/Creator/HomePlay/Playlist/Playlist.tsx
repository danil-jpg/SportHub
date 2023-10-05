import React, { FC, useState } from 'react';
import './Playlist.scss';
import Video from '../../Video/Video';
import { IPlaylist } from '../HomePlay';
import { v1 } from 'uuid';
import './Playlist.scss';
import { Link } from 'react-router-dom';
import getDate from '../../../../utils/getDate';

const Playlist: FC<IPlaylist> = ({ title = 'Defalut Title', videos, index }) => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className='playlist'>
            <div className='creator__playlist-line'>
                <div className='creator__playlist_title'>
                    <Link to={`../playlist?playlist-index=${index}`}>{title}</Link>
                </div>
                <div className={`${showAll ? 'active' : ''} creator__playlist_view-more`} onClick={() => setShowAll(!showAll)}>
                    View all
                </div>
            </div>
            <div className='playlist__videos'>
                {videos.map((el, index) => {
                    return showAll ? (
                        <Video key={v1()} title={el.title} previewUrl={el.previewUrl} date={getDate(el.date)}></Video>
                    ) : index < 4 ? (
                        <Video key={v1()} title={el.title} previewUrl={el.previewUrl} date={getDate(el.date)}></Video>
                    ) : (
                        ''
                    );
                })}
            </div>
        </div>
    );
};

export default Playlist;
