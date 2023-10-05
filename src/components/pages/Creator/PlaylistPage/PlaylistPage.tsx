import React, { useState, useEffect, FC } from 'react';
import './PlaylistPage';
import DotBtn from '../../../common/DotBtn/DotBtn';
import './PlaylistPage.scss';
import { DB } from '../../../../config/firebase-config';
import { arrayRemove, getDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { useAppSelector } from '../../../hooks/redux';
import { v1 } from 'uuid';
import { useSearchParams } from 'react-router-dom';
import Loading from '../../../common/Loading/Loading';
import { IPlaylist } from '../HomePlay/HomePlay';
import Video from '../Video/Video';
import getDate from '../../../utils/getDate';
import { updateDoc } from 'firebase/firestore';

const PlaylistPage: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const index: string | null = searchParams.get('playlist-index');

    const [btnMenu, setBtnMenu] = useState<boolean>(true);

    const [playlistData, setPlayListData] = useState<IPlaylist[]>([]);

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
    // x
    const onBtnClickHandler = () => setBtnMenu(!btnMenu);

    const onDeleteClickHandler = async () => {
        const playlistDoc = doc(DB, 'users', selector.email);
        const elemToDelete = {
            playlists: arrayRemove(0),
        };
        updateDoc(playlistDoc, elemToDelete)
            .then((res) => {
                console.log('Ready?');
            })
            .catch((e) => console.log('error'));
    };

    if (!playlistData[0]) {
        return <Loading />;
    }
    return (
        <div className='playlist-page'>
            <div className='playlist__top'>
                <div className='playlist__top-info'>
                    <p className='playlist__title'>{index ? playlistData[+index].title : 'undefined'}</p>
                    <DotBtn menu={btnMenu} onClickHandler={onBtnClickHandler} onDeleteHandler={onDeleteClickHandler}></DotBtn>
                </div>
                <div className='playlist__video'>
                    <p className='playlist__video_text'>{index ? playlistData[+index].videos.length : 'undefined'} videos</p>
                </div>
                <div className='playlist__descr'>{index ? playlistData[+index].description : 'undefined'}</div>
            </div>
            <div className='playlist__selected-videos'>
                {index
                    ? playlistData[+index].videos.map((el, index) => {
                          return <Video key={v1()} title={el.title} previewUrl={el.previewUrl} date={getDate(el.date)}></Video>;
                      })
                    : ''}
            </div>
        </div>
    );
};

export default PlaylistPage;