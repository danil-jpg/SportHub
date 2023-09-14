import React, { FC, useEffect, useRef } from 'react';
import './RegistratoinCouch.scss';
import { register } from 'swiper/element/bundle';
import 'swiper/css';

const RegistrationCouch = () => {
    const ref = useRef(null);
    register();

    // useEffect(() => {
    //     const swiperParams = {
    //         slidesPerView: 1,
    //         direction: 'vertical',
    //         breakpoints: {},
    //         on: {
    //             init() {},
    //         },
    //     };
    //     Object.assign(ref, swiperParams);
    //     ref?.current.initialize();
    // }, []);

    return (
        <div className='couch'>
            <div className='couch__left'>
                <swiper-container style={{ height: '100%' }} direction='vertical' slides-per-view='2.2' space-beetween='25px'>
                    <swiper-slide>
                        <div className='couch__item' style={{ backgroundImage: '' }}>
                            <div className='couch__item__info'>
                                <p className='couch__item_name'>Kristin Watson</p>
                                <p className='couch__item_occupation'>Rehabilitation specialist</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='couch__item'>2</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='couch__item'>3</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='couch__item'>3</div>
                    </swiper-slide>
                </swiper-container>
            </div>
            <div className='couch__right'>
                <swiper-container style={{ height: '100%' }} direction='vertical' slides-per-view='2.6'>
                    <swiper-slide>
                        <div className='couch__item'>4</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='couch__item'>5</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='couch__item'>6</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='couch__item'>7</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='couch__item'>8</div>
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
    );
};

export default RegistrationCouch;
