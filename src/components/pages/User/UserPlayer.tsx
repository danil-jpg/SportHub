import React, { useEffect, useRef } from 'react';
import './UserPlayer.scss';
import IconRenderer from '../../ui/IconRenderer/IconRenderer';
import defaultUser from '../../../assets/img/user/test-user.png';
import Button from '../../ui/Button/Button';
import Header from '../../common/Header/Header';
import Slider from './UserHome/Slider/Slider';
import { useAppSelector } from '../../hooks/redux';
import Video from '../Creator/Video/Video';
import { register } from 'swiper/element';

const UserPlayer = () => {
    const selector = useAppSelector((state) => state.usersSlice.data[0].videos);

    const swiperRef = useRef<any>(null);

    useEffect(() => {
        register();
        const params = {
            slidesPerView: 3.5,
            spaceBetween: 24,
            breakpoints: {
                768: {
                    slidesPerView: 3,
                },
                576: {
                    slidesPerView: 2.5,
                },
                320: {
                    direction: 'vertical',
                    slidesPerView: 1,
                },
            },
        };
        if (!swiperRef.current) return;
        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
    }, []);

    return (
        <>
            <Header></Header>
            <div className='player'>
                <div className='player__top player__content-container'>
                    <div className='player__return-btn'>
                        <IconRenderer id='return-arrow' />
                    </div>
                    <div className='player__author'>
                        <img src={defaultUser} alt='logo' className='player__author_img' />
                        <div className='player__author_texts'>
                            <p className='player__author_title'>Eleanor Pena</p>
                            <p className='player__author_text'>145.3K subscribers</p>
                        </div>
                    </div>
                    <Button className='player__top_btn'>Subscribe</Button>
                </div>
                <div className='player__player player__content-container'></div>
                <div className='player__info player__content-container'>
                    <p className='player__title'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame</p>
                    <div className='player__info-center'>
                        <div className='player__icons-section'>
                            <div className='player__reaction-wr'>
                                <div className='player__like-wr'>
                                    <IconRenderer id='like' />
                                    <p className='player__reaction_text'>5.7K</p>
                                </div>
                                <div className='player__like-wr'>
                                    <IconRenderer id='dislike' />
                                    <p className='player__reaction_text'>469</p>
                                </div>
                            </div>
                            <div className='player__icon-comment'>
                                <IconRenderer id='comments' />
                                <p className='player__reaction_text'>469</p>
                            </div>
                        </div>
                        <div className='player__num-info'>
                            <p className='player__num-info_text'>145.3K views</p>
                            <p className='player__num-info_text'>3h ago</p>
                        </div>
                    </div>
                    <p className='player__descr'>
                        Praesent ultricies lacus in ligula volutpat feugiat. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Fusce luctus justo eget nisi
                        hendrerit, quis aliquam arcu porta. Cras ultricies, elit sit amet cursus consectetur, risus felis ullamcorper nulla, ut scelerisque sapien lorem non sem.
                        Integer vestibulum ornare ligula, a placerat lectus volutpat ultrices. Aliquam commodo malesuada purus a mollis. Vestibulum pulvinar aliquam libero eu
                        consequat. Cras massa orci, ultrices Sed scelerisque id, semper vel neque. Proin a turpis quis nibh cursus hendrerit sit amet vel libero. Nullam sit amet
                        laoreet ante. Mauris sit amet mi vitae arcu dignissim porttitor et in arcu. Nullam eleifend molestie arcu, pretium fermentum orci feugiat eget. Integer
                        dapibus tincidunt ipsum, at rutrum magna rutrum at. Quisque pretium convallis vestibulum.
                    </p>
                </div>
                <div className='player__another-videos'>
                    <p className='player__another-videos_text'>Video List Name</p>
                    <swiper-container init={false} ref={swiperRef} style={{}}>
                        {selector?.map((el) => {
                            return (
                                <swiper-slide>
                                    <Video title={el.title} previewUrl={el.previewUrl} />
                                </swiper-slide>
                            );
                        })}
                    </swiper-container>
                </div>
            </div>
        </>
    );
};

export default UserPlayer;
