import React, { useEffect, useRef, useState } from 'react';
import './UserPlayer.scss';
import IconRenderer from '../../ui/IconRenderer/IconRenderer';
import defaultUser from '../../../assets/img/user/test-user.png';
import Button from '../../ui/Button/Button';
import Header from '../../common/Header/Header';
import Slider from './UserHome/Slider/Slider';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Video from '../Creator/Video/Video';
import { register } from 'swiper/element';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../common/Loading/Loading';
import getDate from '../../utils/getDate';
import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { DB } from '../../../config/firebase-config';
import { getUsers } from '../../store/slices/users';

const UserPlayer = () => {
    const [videos, setVideos] = useState([]);

    const currentUserEmail = useAppSelector((state) => state.regSlice.regData.email);

    const selectorCurrentVideo = useAppSelector((state) => state.creatorSlice.videoData);

    const selectorChannelUser = useAppSelector((state) => state.usersSlice.data.filter((el) => el.email === selectorCurrentVideo.videoObj?.email));

    const [sbsBtn, setSbsBtn] = useState<boolean | undefined>(false);

    const navigate = useNavigate();

    const swiperRef = useRef<any>(null);

    const dispatch = useAppDispatch();

    const getVideos = async () => {
        try {
            const videosIds = selectorChannelUser[0].videosIds;
            console.log(videosIds);
            if (videosIds && videosIds?.length > 0) {
                videosIds.map(async (el) => {
                    const docRef = await doc(DB, 'videos', el);
                    const getVideo = (await getDoc(docRef)).data();

                    setVideos((prev) => [...prev, getVideo]);
                });
            }
        } catch (e) {
            console.error(e);
        }
    };

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

        getVideos();
    }, []);

    const onReturnArrowClickHandler = () => {
        navigate(-1);
    };

    const onSubscribeBtnClickHandler = async () => {
        const docRef = doc(DB, 'users', currentUserEmail);
        const docRefCreator = doc(DB, 'users', selectorChannelUser[0].email);
        if (selectorChannelUser[0].subscriptions && selectorChannelUser[0].subscriptions.includes(selectorChannelUser[0].email)) {
            const userUpdate = await updateDoc(docRef, {
                subscriptions: arrayRemove(selectorChannelUser[0].email),
            });
            const creatorUpdate = await updateDoc(docRefCreator, {
                subscribers: arrayRemove(currentUserEmail),
            });

            dispatch(getUsers());
            setSbsBtn(false);
        } else {
            const userUpdate = await updateDoc(docRef, {
                subscriptions: arrayUnion(selectorChannelUser[0].email),
            });
            const creatorUpdate = await updateDoc(docRefCreator, {
                subscribers: arrayUnion(currentUserEmail),
            });

            dispatch(getUsers());
            setSbsBtn(true);
        }
    };

    if (!selectorCurrentVideo.videoObj?.previewUrl) return <Loading />;
    return (
        <>
            <Header></Header>
            <div className='player'>
                <div className='player__top player__content-container'>
                    <div className='player__return-btn' onClick={onReturnArrowClickHandler}>
                        <IconRenderer id='return-arrow' />
                    </div>

                    <div className='player__author'>
                        <img src={defaultUser} alt='logo' className='player__author_img' />
                        <div className='player__author_texts'>
                            <p className='player__author_title'>{`${selectorCurrentVideo.videoObj.fname} ${selectorCurrentVideo.videoObj.lname}`}</p>
                            <p className='player__author_text'>{`${selectorChannelUser[0].subscribers?.length}`} subscribers</p>
                        </div>
                    </div>
                    {sbsBtn ? (
                        <Button className='banner__subs-btn button_unsubscribe player__top_btn' onClickHandler={onSubscribeBtnClickHandler}>
                            Unsubscribe
                        </Button>
                    ) : (
                        <Button className='banner__subs-btn player__top_btn' onClickHandler={onSubscribeBtnClickHandler}>
                            Subscribe
                        </Button>
                    )}
                </div>
                <video src={selectorCurrentVideo.videoObj?.videoUrl} controls className='player__player player__content-container'></video>
                <div className='player__info player__content-container'>
                    <p className='player__title'>{selectorCurrentVideo.videoObj.title}</p>
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
                            <p className='player__num-info_text'>{getDate(selectorCurrentVideo.videoObj.date)} days ago</p>
                        </div>
                    </div>
                    <p className='player__descr'>{selectorCurrentVideo.videoObj.descr}</p>
                </div>
                <div className='player__another-videos'>
                    {/* <p className='player__another-videos_text'>Video List Name</p>
                    <swiper-container init={false} ref={swiperRef} style={{}}>
                        {selector?.map((el) => {
                            return (
                                <swiper-slide>
                                    <Video title={el.title} previewUrl={el.previewUrl} />
                                </swiper-slide>
                            );
                        })}
                    </swiper-container> */}
                </div>
            </div>
        </>
    );
};

export default UserPlayer;
