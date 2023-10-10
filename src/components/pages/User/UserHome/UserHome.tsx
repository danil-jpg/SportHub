import React, { FC, Ref, useEffect, useRef } from 'react';
import './UserHome.scss';
import UserItem from '../UserItem/User-item';
import { v1 } from 'uuid';
import Slider from './Slider/Slider';
import Video from '../../Creator/Video/Video';

const UserHome: FC = () => {
    return (
        <div className='user-home user-home__container'>
            <div className='user-home__left'>
                <div className='user-home__filters-wr'>
                    <p className='user-home__filter active'>Home</p>
                    <p className='user-home__filter'>Latest</p>
                    <p className='user-home__filter'>View later </p>
                </div>
                <div className='user-home__subscriptions'>
                    <p className='user-home__subscriptions_title'>My subscription</p>
                    <UserItem name='Marvin McKinney' />
                    <UserItem name='Marvin McKinney' />
                </div>
            </div>
            <div className='user-home__right'>
                <Slider className='user-home__slider' />
                <div className='user-home__videos-section'>
                    <p className='user-home__videos_text'>Video List</p>
                    <div className='user-home__videos-wr'>
                        <Video />
                        <Video />
                        <Video />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
