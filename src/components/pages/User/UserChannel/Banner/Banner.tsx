import React, { FC, useEffect, useState } from 'react';
import IconRenderer from '../../../../ui/IconRenderer/IconRenderer';
import './Banner.scss';
import defaultUser from '../../../../../assets/img/user/card/default-user.jpg';
import defaultUserW from '../../../../../assets/img/user/card/default-user.jpg?as=webp';
import Button from '../../../../ui/Button/Button';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { DB } from '../../../../../config/firebase-config';
import { ref } from 'firebase/storage';
import { getUsers, setUsersData } from '../../../../store/slices/users';

const Banner: FC = () => {
    const selectorCreatorEmail = useAppSelector((state) => state.creatorSlice.creatorEmail.email);
    const selectorUsers = useAppSelector((state) => state.usersSlice.data);
    const selectorUserEmail = useAppSelector((state) => state.regSlice.regData.email);
    const dispatch = useAppDispatch();
    const getCurrentUser = selectorUsers.filter((el) => el.email === selectorUserEmail);

    const [sbsBtn, setSbsBtn] = useState<boolean | undefined>(getCurrentUser[0].subscriptions && getCurrentUser[0].subscriptions.includes(selectorCreatorEmail));
    const [channelData, setChannelData] = useState(selectorUsers.filter((el) => el.email === selectorCreatorEmail));

    const onSubscribeBtnClickHandler = async () => {
        const docRef = doc(DB, 'users', selectorUserEmail);
        const docRefCreator = doc(DB, 'users', selectorCreatorEmail);
        alert('del');
        if (getCurrentUser[0].subscriptions && getCurrentUser[0].subscriptions.includes(selectorCreatorEmail)) {
            const userUpdate = await updateDoc(docRef, {
                subscriptions: arrayRemove(selectorCreatorEmail),
            });
            const creatorUpdate = await updateDoc(docRefCreator, {
                subscribers: arrayRemove(selectorUserEmail),
            });

            dispatch(getUsers());
            setSbsBtn(false);
        } else {
            const userUpdate = await updateDoc(docRef, {
                subscriptions: arrayUnion(selectorCreatorEmail),
            });
            const creatorUpdate = await updateDoc(docRefCreator, {
                subscribers: arrayUnion(selectorUserEmail),
            });
            alert('add');

            dispatch(getUsers());
            setSbsBtn(true);
        }
    };

    return (
        <div>
            {channelData[0].coverPhotoUrl ? (
                <div className='banner' style={{ backgroundImage: `url(${channelData[0].coverPhotoUrl})` }}>
                    <div className='banner__empty'></div>
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
                                    <p className=' banner__data-num'>
                                        {channelData[0].subscribers && channelData[0].subscribers?.length > 0 ? channelData[0].subscribers.length : 0}
                                    </p>
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
                        {sbsBtn ? (
                            <Button className='banner__subs-btn button_unsubscribe' onClickHandler={onSubscribeBtnClickHandler}>
                                Unsubscribe
                            </Button>
                        ) : (
                            <Button className='banner__subs-btn ' onClickHandler={onSubscribeBtnClickHandler}>
                                Subscribe
                            </Button>
                        )}
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
                                    <p className=' banner__data-num'>
                                        {channelData[0].subscribers && channelData[0].subscribers?.length > 1 ? channelData[0].subscribers.length : 0}
                                    </p>
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
                        {getCurrentUser[0].email === selectorUserEmail ? '' : <Button className=' banner__subs-btn'>Subscribe</Button>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Banner;
