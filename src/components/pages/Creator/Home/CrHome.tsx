import React, { FC, useState } from 'react';
import Button from '../../../ui/Button/Button';
import IconRenderer from '../../../ui/IconRenderer/IconRenderer';
import '../CrHome.scss';
import Video from '../Video/Video';
import { useNavigate } from 'react-router-dom';
import { getDoc } from 'firebase/firestore';

const CrHome: FC = () => {
    const [previewImageUrl, setPreviewImageUrl] = useState<string>('');
    const [videoTitle, setVideoTitle] = useState<string>('');
    const [videoDate, setVideoDate] = useState<string>('');

    const currentDate = new Date().getTime();
    const date: number = new Date('28 Sept 2023 14:45:49').getTime();
    console.log(`date differ by ${currentDate - date}`);

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
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
            </div>
        </div>
    );
};

export default CrHome;
