import React, { useEffect, useState } from 'react';
import './UserPlayer.scss';
import IconRenderer from '../../ui/IconRenderer/IconRenderer';
import defaultUser from '../../../assets/img/user/test-user.png';
import Button from '../../ui/Button/Button';
import Header from '../../common/Header/Header';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../common/Loading/Loading';
import getDate from '../../utils/getDate';
import { QueryDocumentSnapshot, arrayRemove, arrayUnion, collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { DB } from '../../../config/firebase-config';
import { IShuffledVideo, IUserData } from './User';
import UserSlider from '../../common/UserSlider/UserSlider';
import { setCreatorEmail } from '../../store/slices/creator';
import { Subscribers } from './User';
import UserComment from './UserCommon/UserComment/UserComment';

const UserPlayer = () => {
    const [videos, setVideos] = useState<IShuffledVideo[]>([]);
    const [currVideoData, setCurrVideoData] = useState<IShuffledVideo | null>(null);
    const [channelUserData, setchannelUserData] = useState<IUserData | null>(null);
    const [isCommentOpen, setIsCommentOpen] = useState<boolean>(false);

    const currentUserEmail = useAppSelector((state) => state.regSlice.regData.email);
    const selectorCurrentVideoId = useAppSelector((state) => state.creatorSlice.videoData.videoObj?.videoId);
    const selectorUsers = useAppSelector((state) => state.usersSlice.data);

    // тест
    const currVideoDataSelector = useAppSelector((state) => state.creatorSlice.videoData.videoObj);

    const [sbsBtn, setSbsBtn] = useState<boolean>(channelUserData && channelUserData.subscribers ? channelUserData.subscribers.includes(currentUserEmail) : false);
    const hashOfVideo = window.location.href.match(/video\/([^/]+)/);
    const { id } = useParams();

    const [videoUUID, setVideoUUID] = useState(selectorCurrentVideoId);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const getVideos = async () => {
        try {
            const converter = {
                toFirestore: (data: IShuffledVideo) => data,
                fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as IShuffledVideo,
            };

            const collRef = collection(DB, 'videos').withConverter(converter);

            const getVideos = (await getDocs(collRef)).docs.map((el) => {
                return { ...el.data(), videoId: el.id };
            });

            const res: any[] = getVideos.map((el) => {
                const videoAuthor = selectorUsers.filter((innerEl) => {
                    return innerEl.email === el.email;
                })[0];

                return {
                    ...el,
                    fname: videoAuthor.fname ? videoAuthor.fname : '',
                    lname: videoAuthor.lname ? videoAuthor.lname : '',
                    authorPicUrl: videoAuthor.photoUrl ? videoAuthor.photoUrl : '',
                };
            });

            setVideos(res);
        } catch (e) {
            console.error(e);
        }
    };

    const getCurrentUserData = async () => {
        try {
            const converter = {
                toFirestore: (data: IUserData) => data,
                fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as IUserData,
            };

            if (currVideoData && currVideoData.email) {
                const docRef = doc(DB, 'users', currVideoData.email).withConverter(converter);

                const getCurrentUser = (await getDoc(docRef)).data();

                setchannelUserData(getCurrentUser ? getCurrentUser : null);
            } else {
                // console.log('current user data is not loaded');
            }
        } catch (e) {
            console.error(e);
        }
    };

    const getCurrentVideoData = async () => {
        try {
            const converter = {
                toFirestore: (data: IShuffledVideo) => data,
                fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as IShuffledVideo,
            };
            const docRef = await doc(DB, 'videos', hashOfVideo ? hashOfVideo[1] : '').withConverter(converter);

            let getCurrentVideo = (await getDoc(docRef)).data();

            setCurrVideoData(getCurrentVideo ? getCurrentVideo : null);

            return getCurrentVideo;
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getCurrentVideoData();
        getVideos();
    }, [id]);

    useEffect(() => {
        getCurrentUserData();
    }, [currVideoData]);

    useEffect(() => {
        setSbsBtn(channelUserData && channelUserData.subscribers ? channelUserData.subscribers.includes(currentUserEmail) : false);
    }, [channelUserData]);

    const onReturnArrowClickHandler = () => {
        navigate(-1);
    };

    const onSubscribeBtnClickHandler = async () => {
        try {
            const docRef = doc(DB, 'users', currentUserEmail);
            const docRefCreator = doc(DB, 'users', channelUserData ? channelUserData.email : '');
            if (channelUserData && channelUserData.subscribers && channelUserData.subscribers.includes(currentUserEmail)) {
                await updateDoc(docRef, {
                    subscriptions: arrayRemove(channelUserData.email),
                });
                await updateDoc(docRefCreator, {
                    subscribers: arrayRemove(currentUserEmail),
                });

                getCurrentUserData();
                setSbsBtn(false);
            } else {
                await updateDoc(docRef, {
                    subscriptions: arrayUnion(channelUserData ? channelUserData.email : ''),
                });
                await updateDoc(docRefCreator, {
                    subscribers: arrayUnion(currentUserEmail),
                });

                getCurrentUserData();
                setSbsBtn(true);
            }
        } catch (e) {
            console.error(e);
        }
    };

    const onLikeClickHandler = async () => {
        try {
            const docRef = doc(DB, 'videos', videoUUID ? videoUUID : '');

            if (currVideoData?.likes?.includes(currentUserEmail)) {
                setCurrVideoData((prev) => {
                    return prev ? { ...prev, likes: prev?.likes.filter((el) => el !== currentUserEmail), dislikes: prev?.dislikes.filter((el) => el !== currentUserEmail) } : prev;
                });

                await updateDoc(docRef, {
                    likes: arrayRemove(currentUserEmail),
                });
                getCurrentUserData();
            } else {
                setCurrVideoData((prev) => {
                    return prev ? { ...prev, likes: [...prev?.likes, currentUserEmail], dislikes: prev?.likes.filter((el) => el !== currentUserEmail) } : prev;
                });

                await updateDoc(docRef, {
                    likes: arrayUnion(currentUserEmail),
                    dislikes: arrayRemove(currentUserEmail),
                });
            }
        } catch (e) {
            console.error(e);
        }
    };

    const onDisLikeClickHandler = async () => {
        try {
            const docRef = doc(DB, 'videos', videoUUID ? videoUUID : '');

            if (currVideoData?.dislikes?.includes(currentUserEmail)) {
                setCurrVideoData((prev) => {
                    return prev ? { ...prev, dislikes: prev?.dislikes.filter((el) => el !== currentUserEmail), likes: prev?.likes.filter((el) => el !== currentUserEmail) } : prev;
                });

                await updateDoc(docRef, {
                    dislikes: arrayRemove(currentUserEmail),
                });
            } else {
                setCurrVideoData((prev) => {
                    return prev && prev.dislikes ? { ...prev, dislikes: [...prev?.dislikes, currentUserEmail], likes: prev?.likes.filter((el) => el !== currentUserEmail) } : prev;
                });

                await updateDoc(docRef, {
                    dislikes: arrayUnion(currentUserEmail),
                    likes: arrayRemove(currentUserEmail),
                });
            }
        } catch (e) {
            console.error(e);
        }
    };

    const onCommentClickHandler = async () => {
        setIsCommentOpen(!isCommentOpen);
    };

    if (!channelUserData?.email) return <Loading />;
    return (
        <>
            <Header mobChildren={<Subscribers />}></Header>
            <div className='player'>
                <div className='player__top player__content-container'>
                    <div className='player__return-btn' onClick={onReturnArrowClickHandler}>
                        <IconRenderer id='return-arrow' />
                    </div>
                    <div
                        className='player__author'
                        onClick={() => {
                            dispatch(setCreatorEmail({ email: currVideoData ? currVideoData.email : '' }));
                            navigate(`../../../user/channel/${currVideoData && currVideoData.email ? currVideoData.email.replace(/\./g, '') : ''}`);
                        }}
                    >
                        {currVideoData ? (
                            <img src={channelUserData?.photoUrl} alt='logo' className='player__author_img' />
                        ) : (
                            <img src={defaultUser} alt='logo' className='player__author_img' />
                        )}

                        <div className='player__author_texts'>
                            <p className='player__author_title'>{`${channelUserData?.fname} ${channelUserData?.lname}`}</p>
                            <p className='player__author_text'>
                                {channelUserData?.subscribers?.length && channelUserData?.subscribers?.length > 0 ? channelUserData?.subscribers?.length : 0} subscribers
                            </p>
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
                <video src={currVideoData?.videoUrl} controls className='player__player player__content-container'></video>
                <div className='player__info player__content-container'>
                    <p className='player__title'>{currVideoData?.title}</p>
                    <div className='player__info-center'>
                        <div className='player__icons-section'>
                            <div className='player__reaction-wr'>
                                <div className={`player__like-wr ${currVideoData?.likes?.includes(currentUserEmail) ? 'active' : ''}`} onClick={onLikeClickHandler}>
                                    <IconRenderer id='like' />
                                    <p className='player__reaction_text'>{currVideoData?.likes?.length}</p>
                                </div>
                                <div className={`player__like-wr ${currVideoData?.dislikes?.includes(currentUserEmail) ? 'active' : ''}`} onClick={onDisLikeClickHandler}>
                                    <IconRenderer id='dislike' />
                                    <p className='player__reaction_text'>{currVideoData?.dislikes?.length}</p>
                                </div>
                            </div>
                            <div className={`${isCommentOpen ? 'active' : ''} player__icon-comment`} onClick={onCommentClickHandler}>
                                <IconRenderer id='comments' />
                                <p className='player__reaction_text'>{currVideoDataSelector?.comments?.length ? currVideoDataSelector?.comments?.length : 0}</p>
                            </div>
                        </div>
                        <div className='player__num-info'>
                            <p className='player__num-info_text'>{getDate(currVideoData?.date)} days ago</p>
                        </div>
                    </div>
                    <p className='player__descr'>{currVideoData?.descr}</p>
                </div>
                <UserSlider videos={videos} />
                <UserComment isOpen={isCommentOpen} setIsOpen={setIsCommentOpen} />
            </div>
        </>
    );
};

export default UserPlayer;
