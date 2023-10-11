import React, { FC, Ref, useEffect, useRef } from 'react';
import { v1 } from 'uuid';
import { register } from 'swiper/element/bundle';
import { SwiperRef } from 'swiper/react';
import mindImg from '../../../../../assets/img/user/card/mind.jpg';
import mindImgW from '../../../../../assets/img/user/card/mind.jpg?as=webp';
import bodyImg from '../../../../../assets/img/user/card/body.jpg';
import bodyImgW from '../../../../../assets/img/user/card/body.jpg?as=webp';
import soulImg from '../../../../../assets/img/user/card/soul.jpg';
import soulImgW from '../../../../../assets/img/user/card/soul.jpg?as=webp';
import './Slider.scss';

interface ISlider {
    className: string;
}

const Slider: FC<ISlider> = ({ className }) => {
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        register();
        const params = {
            slidesPerView: 3,
            spaceBetween: 24,
            breakpoints: {
                768: {
                    slidesPerView: 2.5,
                },
                576: {
                    slidesPerView: 2,
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
        <swiper-container className={className} init={false} ref={swiperRef}>
            <swiper-slide key={v1()}>
                <div className='slider__item'>
                    <picture className=''>
                        <source src={mindImgW}></source>
                        <img src={mindImg} />
                    </picture>
                </div>
            </swiper-slide>
            <swiper-slide key={v1()} style={{ cursor: 'pointer' }}>
                <div className='slider__item'>
                    <picture>
                        <source src={bodyImgW}></source>
                        <img src={bodyImg} />
                    </picture>{' '}
                </div>
            </swiper-slide>
            <swiper-slide key={v1()} style={{ cursor: 'pointer' }}>
                <div className='slider__item'>
                    <picture>
                        <source src={soulImgW}></source>
                        <img src={soulImg} />
                    </picture>{' '}
                </div>
            </swiper-slide>
        </swiper-container>
    );
};

export default Slider;
