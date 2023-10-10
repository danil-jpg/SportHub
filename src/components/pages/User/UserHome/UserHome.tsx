import React, { FC, Ref, useEffect, useRef } from 'react';
import './UserHome.scss';
import UserItem from '../UserItem/User-item';
import { v1 } from 'uuid';
import { register } from 'swiper/element/bundle';
import { SwiperRef } from 'swiper/react';

const UserHome: FC = () => {
    const swiperRef = useRef<SwiperRef>(null);

    useEffect(() => {
        register();

        const params = {
            slidesPerView: 3,
            breakpoints: {
                992: {
                    slidesPerView: 3,
                },
                320: {
                    slidesPerView: 1.5,
                },
            },
        };
        if (!swiperRef.current) return;

        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
    }, []);

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
                <swiper-container init={false} ref={swiperRef} style={{ height: '100%' }}>
                    <swiper-slide key={v1()}>lkfdas;lfkjask;flas;kflsd</swiper-slide>
                    <swiper-slide key={v1()}>lkfdas;lfkjask;flas;kflsd</swiper-slide>
                    <swiper-slide key={v1()}>lkfdas;lfkjask;flas;kflsd</swiper-slide>
                </swiper-container>
            </div>
        </div>
    );
};

export default UserHome;
