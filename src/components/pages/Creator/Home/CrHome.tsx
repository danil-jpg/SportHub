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
import swal from 'sweetalert';

interface IVideo {
    category: string;
    descr: string;
    previewUrl: string;
    shopify: string;
    title: string;
    videoUrl: string;
    date?: any;
}

const CrHome: FC = () => {
    const [videosArr, setVideosArr] = useState<IVideo[]>([]);
    const [filteredVideosArr, setFilteredVideosArr] = useState<IVideo[]>([]);

    const [activeButtonArr, setActiveButtonArr] = useState<boolean[]>([true, false, false, false]);

    const selector = useAppSelector((state) => state.regSlice.regData);

    const currentDay = new Date().getTime();

    useEffect(() => {
        const getUserData = async () => {
            const ref = await doc(DB, 'users', selector.email);
            const userData = await getDoc(ref);
            const filteredData = userData.data()?.videos;

            setVideosArr(filteredData ? filteredData : []);
            setFilteredVideosArr(filteredData ? filteredData : []);

            return filteredData;
        };
        getUserData();
    }, []);

    const filterByType = (type: string) => {
        if (type === 'All') {
            setFilteredVideosArr(videosArr);
        } else if (type === 'Mind') {
            setFilteredVideosArr(videosArr.filter((el) => el.category === 'Mind'));
        } else if (type === 'Body') {
            setFilteredVideosArr(videosArr.filter((el) => el.category === 'Body'));
        } else if (type === 'Soul') {
            setFilteredVideosArr(videosArr.filter((el) => el.category === 'Soul'));
        } else {
            swal('Something went wrong');
        }
    };

    const navigate = useNavigate();
    return (
        <div className='creator-container creator'>
            <div className='creator__top'>
                <div className='creator__video-play-tabs'>
                    <div className='creator__tab creator__video_tab active'>Your video</div>
                    <div className='creator__tab creator__play_tab' onClick={() => navigate('../home-cr-playlist')}>
                        Playlists
                    </div>
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
                <div
                    className={`creator__type ${activeButtonArr[0] ? 'active' : ''} creator__type_all`}
                    onClick={(e) => {
                        filterByType('All');
                        setActiveButtonArr([true, false, false, false]);
                    }}
                >
                    All
                </div>
                <div
                    className={`creator__type ${activeButtonArr[1] ? 'active' : ''} creator__type_all`}
                    onClick={() => {
                        setActiveButtonArr([false, true, false, false]);
                        filterByType('Mind');
                    }}
                >
                    Mind
                </div>
                <div
                    className={`creator__type ${activeButtonArr[2] ? 'active' : ''} creator__type_all`}
                    onClick={() => {
                        setActiveButtonArr([false, false, true, false]);
                        filterByType('Body');
                    }}
                >
                    Body
                </div>
                <div
                    className={`creator__type ${activeButtonArr[3] ? 'active' : ''} creator__type_all`}
                    onClick={() => {
                        setActiveButtonArr([false, false, false, true]);
                        filterByType('Soul');
                    }}
                >
                    Soul
                </div>
            </div>
            <div className='creator__videos'>
                {filteredVideosArr.map((el) => (
                    <Video title={el.title} date={((currentDay - el.date?.toDate().getTime()) / 1000 / 60 / 60 / 24).toFixed(0)} preview={el.previewUrl} key={v1()}></Video>
                ))}
            </div>
        </div>
    );
};

export default CrHome;
