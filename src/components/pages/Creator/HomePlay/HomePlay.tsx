import React, { FC, useEffect, useState } from 'react';
import Button from '../../../ui/Button/Button';
import IconRenderer from '../../../ui/IconRenderer/IconRenderer';
import '../CrHome.scss';
import { useNavigate } from 'react-router-dom';
import Playlist from './Playlist/Playlist';
import { DB } from '../../../../config/firebase-config';
import { getDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { useAppSelector } from '../../../hooks/redux';
import { IVideo } from '../Home/CrHome';
import { v1 } from 'uuid';

interface IPlaylist {
    title: string;
    description?: string;
    videos: IVideo[];
    index?: number;
    type?: string;
}

const HomePlay = () => {
    const [playlistData, setPlayListData] = useState<IPlaylist[]>([]);

    const navigate = useNavigate();

    const selector = useAppSelector((state) => state.regSlice.regData);

    const getData = async () => {
        try {
            const data = await getDoc(doc(DB, 'users', selector.email)).then((res) => res.data()?.playlists);
            setPlayListData(data);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='creator-container creator creator-playlist'>
            <div className='creator__top'>
                <div className='creator__video-play-tabs'>
                    <div className='creator__tab creator__video_tab' onClick={() => navigate('../home')}>
                        Your video
                    </div>
                    <div className='creator__tab creator__play_tab active'>Playlists</div>
                </div>
                <Button className='creator__add-video-btn' onClickHandler={() => navigate('../create-playlist')}>
                    <IconRenderer id='plus' className='creator__add-video-svg' />
                    Create new playlist
                </Button>
            </div>
            {playlistData.map((el, index) => (
                <Playlist index={index} videos={el.videos} key={v1()} title={el.title}></Playlist>
            ))}
        </div>
    );
};

export type { IPlaylist };
export default HomePlay;
