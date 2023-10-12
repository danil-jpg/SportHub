import React, { FC } from 'react';
import './UserChannel.scss';
import Banner from './Banner/Banner';
import Video from '../../Creator/Video/Video';
import { IVideo } from '../../Creator/Home/CrHome';
import Tabs from './Tabs/Tabs';

interface IUserChannel {
    videosArr: IVideo[];
}

const UserChannel: FC<IUserChannel> = ({ videosArr }) => {
    return (
        <div className='channel'>
            <Banner />
            <div className='tabs-wr'>
                <Tabs videosArr={videosArr} />
            </div>
        </div>
    );
};

export default UserChannel;
