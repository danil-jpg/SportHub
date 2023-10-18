import React, { FC, useEffect, useState } from 'react';
import Button from '../../../ui/Button/Button';
import IconRenderer from '../../../ui/IconRenderer/IconRenderer';
import '../CrHome.scss';
import { useNavigate } from 'react-router-dom';
import Playlist from './Playlist/Playlist';
import { DB } from '../../../../config/firebase-config';
import { getDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { IVideo } from '../Home/CrHome';
import { v1 } from 'uuid';

interface IPlaylist {
    title: string;
    description?: string;
    videos?: string[];
    videosObj: IVideo[];
    index?: number;
    type?: string;
}

const HomePlay = () => {
    const [playlistData, setPlayListData] = useState<IPlaylist[]>([]);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const selector = useAppSelector((state) => state.regSlice.regData);
    // const selectorCurrUser

    const getData = async () => {
        try {
            const data = await getDoc(doc(DB, 'users', selector.email)).then((res) => res.data()?.playlists);

            if (data && data?.length > 0) {
                console.log(data);
                data.map(async (el: IPlaylist) => {
                    console.log(el);
                    // el.videos.map(async (el) => await console.log(el));
                    el.videos.map(async (innerEl) => {
                        if (typeof innerEl === 'string') {
                            const docRef = await doc(DB, 'videos', innerEl);
                            const getVideo = await getDoc(docRef);
                            console.log(getVideo.data());
                            setPlayListData((prev: any) => [...prev, { title: el.title, description: el.description, type: el.type, videosObj: [getVideo.data()] }]);
                        }
                    });
                    // videosObj.push(getVideo.data());
                });
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getData();
        console.log(playlistData);
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
            {/* {playlistData.map((el, index) => (
                <Playlist index={index} videosObj={el.videos} key={v1()} title={el.title}></Playlist>
            ))} */}
        </div>
    );
};

export type { IPlaylist };
export default HomePlay;
