import React, { FC, useEffect, useRef, useState } from 'react';
import getDate from '../../utils/getDate';
import Video from '../../pages/Creator/Video/Video';
import { v1 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import './UserSlider.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { IShuffledVideo } from '../../pages/User/User';

interface IUserSlider {
    videos: IShuffledVideo[];
}

const UserSlider: FC<IUserSlider> = ({ videos }) => {
    return (
        <div className='player__another-videos'>
            <Swiper
                spaceBetween={24}
                breakpoints={{
                    1200: {
                        slidesPerView: 3.5,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    576: {
                        slidesPerView: 1.5,
                        direction: 'horizontal',
                    },
                    320: {
                        height: 300,
                        direction: 'vertical',
                    },
                }}
            >
                {videos.map((el) => {
                    return (
                        <SwiperSlide key={v1()}>
                            <Video
                                email={el.email}
                                title={el.title}
                                previewUrl={el.previewUrl}
                                fName={el.fname}
                                lName={el.lname}
                                date={getDate(el.date)}
                                author={true}
                                authorPicUrl={el.authorPicUrl}
                                videoObj={el}
                                videoId={el.videoId}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default UserSlider;
