import React, { useEffect, useState } from 'react';
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
    videos: string[];
    videosObj: IVideo[];
    index?: number;
    type?: string;
}

const HomePlay = () => {
    const [playlistData, setPlayListData] = useState<IPlaylist[]>([]);

    const navigate = useNavigate();

    const selector = useAppSelector((state) => state.regSlice.regData);

    const getData = async () => {
        try {
            const data: IPlaylist[] = await getDoc(doc(DB, 'users', selector.email)).then((res) => res.data()?.playlists);

            if (data && data?.length > 0) {
                data.map(async (el: IPlaylist, index) => {
                    setPlayListData((prev: any) => [
                        ...prev,
                        { title: data[index].title, description: data[index].description, type: data[index].type, videos: data[index].videos },
                    ]);
                });
            }
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
                <Playlist playlist={playlistData[index]} index={index} key={v1()}></Playlist>
            ))}
        </div>
    );
};

export type { IPlaylist };
export default HomePlay;
