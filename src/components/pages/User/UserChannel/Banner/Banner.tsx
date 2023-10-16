import React, { FC, useEffect, useState } from 'react';
import IconRenderer from '../../../../ui/IconRenderer/IconRenderer';
import './Banner.scss';
import defaultUser from '../../../../../assets/img/user/card/default-user.jpg';
import defaultUserW from '../../../../../assets/img/user/card/default-user.jpg?as=webp';
import Button from '../../../../ui/Button/Button';
import { useAppSelector } from '../../../../hooks/redux';
import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { DB } from '../../../../../config/firebase-config';
import { ref } from 'firebase/storage';

const Banner: FC = () => {
    const [sbsBtn, setSbsBtn] = useState<boolean>(false);

    const selectorCreatorEmail = useAppSelector((state) => state.creatorSlice.creatorEmail.email);
    const selectorUsers = useAppSelector((state) => state.usersSlice.data);
    const selectorUserEmail = useAppSelector((state) => state.regSlice.regData.email);
    const [channelData, setChannelData] = useState(selectorUsers.filter((el) => el.email === selectorCreatorEmail));

    const getDataFunc = async () => {
        const docRef = doc(DB, 'users', selectorUserEmail);
        const docRefCreator = doc(DB, 'users', selectorCreatorEmail);

        const getSubscriptions = (await getDoc(docRef)).data();
    };

    const onSubscribeBtnClickHandler = async () => {
        const docRef = doc(DB, 'users', selectorUserEmail);
        const docRefCreator = doc(DB, 'users', selectorCreatorEmail);

        const getSubscriptions = selectorUsers.filter((el) => el.email === selectorUserEmail);

        console.log(selectorCreatorEmail);

        if (channelData?.subscriptions.includes(selectorCreatorEmail)) {
            const userUpdate = await updateDoc(docRef, {
                subscriptions: arrayRemove(selectorCreatorEmail),
            });
            const creatorUpdate = await updateDoc(docRefCreator, {
                subscribes: arrayRemove(selectorUserEmail),
            });
        } else {
            const userUpdate = await updateDoc(docRef, {
                subscriptions: arrayUnion(selectorCreatorEmail),
            });
            const creatorUpdate = await updateDoc(docRefCreator, {
                subscribes: arrayUnion(selectorUserEmail),
            });
        }
    };

    useEffect(() => {}, []);

    return (
        <div>
            {channelData[0].coverPhotoUrl ? (
                <div className='banner' style={{ backgroundImage: `url(${channelData[0].coverPhotoUrl})` }}>
                    <div></div>
                    <div className=' banner__left'>
                        <div className=' banner_avatar-wr'>
                            {channelData[0].photoUrl ? (
                                <img className=' banner_avatar_img' alt='avatar' src={channelData[0].photoUrl} />
                            ) : (
                                <picture>
                                    <source src={defaultUserW}></source>
                                    <img className=' banner_avatar_img' alt='avatar' src={defaultUser} />
                                </picture>
                            )}

                            <p className=' banner_avatar_text'>{`${channelData[0].fname} ${channelData[0].lname}`}</p>
                        </div>

                        <div className=' banner__center'>
                            <div className=' banner__data'>
                                <IconRenderer id='subs' />
                                <div className=' banner__inner-data-wr'>
                                    <p className=' banner__data-num'>6.4K</p>
                                    <p className=' banner__data-text'>Subscribers</p>
                                </div>
                            </div>
                            <div className=' banner__data'>
                                <IconRenderer id='camera' />
                                <div className=' banner__inner-data-wr'>
                                    <p className=' banner__data-num'>{`${channelData[0].videos?.length}`}</p>
                                    <p className=' banner__data-text'>Videos</p>
                                </div>
                            </div>
                        </div>
                        <Button className=' banner__subs-btn' onClickHandler={onSubscribeBtnClickHandler}>
                            Subscribe
                        </Button>
                    </div>
                </div>
            ) : (
                <div className='banner'>
                    <div></div>
                    <div className=' banner__left'>
                        <div className=' banner_avatar-wr'>
                            {channelData[0].photoUrl ? (
                                <img className=' banner_avatar_img' alt='avatar' src={channelData[0].photoUrl} />
                            ) : (
                                <img className=' banner_avatar_img' alt='avatar' src={defaultUser} />
                            )}

                            <p className=' banner_avatar_text'>{`${channelData[0].fname} ${channelData[0].lname}`}</p>
                        </div>

                        <div className=' banner__center'>
                            <div className=' banner__data'>
                                <IconRenderer id='subs' />
                                <div className=' banner__inner-data-wr'>
                                    <p className=' banner__data-num'>6.4K</p>
                                    <p className=' banner__data-text'>Subscribers</p>
                                </div>
                            </div>
                            <div className=' banner__data'>
                                <IconRenderer id='camera' />
                                <div className=' banner__inner-data-wr'>
                                    <p className=' banner__data-num'>{`${channelData[0].videos?.length}`}</p>
                                    <p className=' banner__data-text'>Videos</p>
                                </div>
                            </div>
                        </div>
                        <Button className=' banner__subs-btn'>Subscribe</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Banner;
