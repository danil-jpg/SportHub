import React, { FC, useEffect, useState } from 'react';
import './Playlist.scss';
import Video from '../../Video/Video';
import { IPlaylist } from '../HomePlay';
import './Playlist.scss';
import { Link } from 'react-router-dom';
import getDate from '../../../../utils/getDate';
import { v1 } from 'uuid';
import { doc, getDoc } from 'firebase/firestore';
import { DB } from '../../../../../config/firebase-config';
import { IVideo } from '../../Home/CrHome';
import Loading from '../../../../common/Loading/Loading';

interface IPlaylistComp {
    playlist: IPlaylist;
    index: number;
}

const Playlist: FC<IPlaylistComp> = ({ playlist, index }) => {
    const [showAll, setShowAll] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    const [playlistVideoObj, setPlaylistVideoObj] = useState<IVideo[]>([]);

    const inputRef = React.useRef(null);

    const getPlaylistVideos = async () => {
        try {
            setPlaylistVideoObj((prev) => []);
            playlist.videos.map(async (innerEl, innerIndex) => {
                const docRef = await doc(DB, 'videos', innerEl);
                const getVideoItem = (await getDoc(docRef)).data();

                setPlaylistVideoObj((prev: any) => [...prev, getVideoItem]);
            });
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getPlaylistVideos();
        setHasLoaded(true);
    }, []);

    if (!hasLoaded) return <Loading />;
    return (
        <div className='playlist'>
            <div className='creator__playlist-line'>
                <div className='creator__playlist_title'>
                    {playlist.type === 'channel' ? <a>{playlist.title}</a> : <Link to={`../playlist?playlist-index=${index}`}>{playlist.title}</Link>}
                </div>
                <div className={`${showAll ? 'active' : ''} creator__playlist_view-more`} ref={inputRef} onClick={() => setShowAll(!showAll)}>
                    View all
                </div>
            </div>
            <div className='playlist__videos'>
                {playlistVideoObj.map((el: any, index) => {
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
