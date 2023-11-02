import React, { useState, useEffect, FC } from 'react';
import './PlaylistPage';
import DotBtn from '../../../common/DotBtn/DotBtn';
import './PlaylistPage.scss';
import { DB } from '../../../../config/firebase-config';
import { getDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { v1 } from 'uuid';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Loading from '../../../common/Loading/Loading';
import { IPlaylist } from '../HomePlay/HomePlay';
import Video from '../Video/Video';
import getDate from '../../../utils/getDate';
import { updateDoc } from 'firebase/firestore';
import { IVideo } from '../Home/CrHome';
import { setRegData } from '../../../store/slices/registration';

const PlaylistPage: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const index: string | null = searchParams.get('playlist-index');

    const [playlistVideoObj, setPlaylistVideoObj] = useState<IVideo[]>([]);

    const [btnMenu, setBtnMenu] = useState<boolean>(false);

    const [playlistData, setPlayListData] = useState<IPlaylist[]>([]);

    const selector = useAppSelector((state) => state.regSlice.regData);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const getData = async () => {
        try {
            const data = await getDoc(doc(DB, 'users', selector.email)).then((res) => res.data()?.playlists);
            console.log(data);
            setPlayListData(data);
            setPlaylistVideoObj(() => []);
            if (index && data[+index].videos) {
                data[+index].videos.map(async (innerEl: any) => {
                    const docRef = await doc(DB, 'videos', innerEl);
                    const getVideoItem = (await getDoc(docRef)).data();

                    setPlaylistVideoObj((prev: any) => [...prev, { ...getVideoItem, videoId: innerEl }]);
                });
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        dispatch(
            setRegData({
                playlistVideos: playlistVideoObj,
            }),
        );
    }, [playlistVideoObj]);

    useEffect(() => {
        getData();
    }, []);

    const onBtnClickHandler = () => setBtnMenu(!btnMenu);

    const onDeleteClickHandler = async () => {
        const ref = await doc(DB, 'users', selector.email);
        const data = await getDoc(ref);
        const newArr = [...data.data()?.playlists];
        index ? newArr.splice(+index, 1) : console.error('Index is null');

        updateDoc(ref, { playlists: newArr })
            .then(() => {
                navigate('../home-cr-playlist');
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
                    ? playlistVideoObj.map((el) => {
                          return (
                              <Video
                                  key={v1()}
                                  email={el.email}
                                  title={el.title}
                                  previewUrl={el.previewUrl}
                                  date={getDate(el.date)}
                                  author={false}
                                  videoObj={el}
                                  videoId={el.videoId}
                              ></Video>
                          );
                      })
                    : ''}
            </div>
        </div>
    );
};

export default PlaylistPage;
