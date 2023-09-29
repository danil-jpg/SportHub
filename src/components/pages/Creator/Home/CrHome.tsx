import React, { FC, useEffect, useState } from 'react';
import Button from '../../../ui/Button/Button';
import IconRenderer from '../../../ui/IconRenderer/IconRenderer';
import '../CrHome.scss';
import Video from '../Video/Video';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection, getDoc, doc } from 'firebase/firestore';
import { DB } from '../../../../config/firebase-config';
import { useAppSelector } from '../../../hooks/redux';
import { v1 } from 'uuid';

const CrHome: FC = () => {
    const [previewImageUrl, setPreviewImageUrl] = useState<string>('');
    const [videoTitle, setVideoTitle] = useState<string>('');
    const [videoDate, setVideoDate] = useState<string>('');

    const [videosArr, setVideosArr] = useState<any[]>([]);

    const selector = useAppSelector((state) => state.regSlice.regData);

    const currentDay = new Date().getTime();

    useEffect(() => {
        const getUserData = async () => {
            const ref = await doc(DB, 'users', selector.email);
            const userData = await getDoc(ref);
            const filteredData = userData.data()?.videos;
            // console.log((currentDay - filteredData[1].date.toDate().getTime()) / 1000 / 60 / 60 / 24);
            console.log(currentDay);

            setVideosArr(filteredData);
            // console.log(filteredData);
            return filteredData;
        };
        getUserData();
    }, []);

    // new Date().get;

    // const currentDate = new Date().getDay();
    // const date: number = new Date('28 Sept 2023 14:45:49').getDay();
    // console.log(`date differ by ${currentDate - date}`);

    const navigate = useNavigate();
    return (
        <div className='creator-container creator'>
            <div className='creator__top'>
                <div className='creator__video-play-tabs'>
                    <div className='creator__tab creator__video_tab active'>Your video</div>
                    <div className='creator__tab creator__play_tab'>Playlists</div>
                </div>
                <Button
                    className='creator__add-video-btn'
                    onClickHandler={() => {
                        navigate('../addvideo1');
                    }}
                >
                    <IconRenderer id='plus' className='creator__add-video-svg' />
                    Add new video
                </Button>
            </div>
            <div className='creator__types'>
                <div className='creator__type active creator__type_mind'>Mind</div>
                <div className='creator__type creator__type_body'>Body</div>
                <div className='creator__type creator__type_soul'>Soul</div>
            </div>
            <div className='creator__videos'>
                {videosArr.map((el) => (
                    <Video title={el.title} date={((currentDay - el.date?.toDate().getTime()) / 1000 / 60 / 60 / 24).toFixed(0)} preview={el.previewUrl} key={v1()}></Video>
                ))}
            </div>
        </div>
    );
};

export default CrHome;
