import React, { FC, useState } from 'react';
import './Video.scss';
import IconRenderer from '../../../ui/IconRenderer/IconRenderer';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { DB } from '../../../../config/firebase-config';
import defaultUser from '../../../../assets/img/user/card/default-user.jpg';
import defaultUserW from '../../../../assets/img/user/card/default-user.jpg?as=webp';
import { IVideo } from '../Home/CrHome';
import { IShuffledVideo } from '../../User/User';
import { setRegData } from '../../../store/slices/registration';
import { setCreatorEmail, setCurrentVideo } from '../../../store/slices/creator';

interface IVideoComp {
    title: string;
    date?: number | string;
    previewUrl: string;
    videoArr?: IVideoComp[];
    className?: string;
    onClickFoo?: any;
    index?: number | string;
    author?: boolean;
    authorPicUrl?: string;
    fName?: string;
    lName?: string;
    videoId?: string;
    setVideos?: React.Dispatch<React.SetStateAction<IShuffledVideo[]>>;
    email?: string;
    videoObj?: IVideo;
    isClickAble?: boolean;
}

const Video: FC<IVideoComp> = ({
    videoId,
    videoObj,
    author = false,
    authorPicUrl,
    fName,
    lName,
    title = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...',
    date = 'Long ago',
    previewUrl = '',
    className = '',
    isClickAble = true,
    email,
}) => {
    const [videoMenu, setVideoMenu] = useState(false);

    const navigate = useNavigate();

    const selector = useAppSelector((state) => state.regSlice.regData);
    const dispatch = useAppDispatch();

    const addToViewLater = async (): Promise<void> => {
        const ref = await doc(DB, 'users', selector.email);
        const data = await getDoc(ref);
        const oldViewLater = data.data()?.viewLater;

        try {
            if (oldViewLater) {
                let isVidUnique: boolean = true;

                for (let i = 0; i < oldViewLater.length; i++) {
                    isVidUnique = !(videoId === oldViewLater[i]);
                    if (!isVidUnique) {
                        break;
                    }
                }
                if (isVidUnique) {
                    await updateDoc(ref, {
                        viewLater: [...oldViewLater, videoId],
                    });
                    if (selector.viewLater)
                        dispatch(
                            setRegData({
                                viewLater: [...selector.viewLater, videoObj],
                            }),
                        );
                }
            } else {
                await updateDoc(ref, {
                    viewLater: [videoId],
                });
                dispatch(
                    setRegData({
                        viewLater: [videoObj],
                    }),
                );
            }
        } catch (e) {
            console.error(e);
        }
    };

    const currentUserEmailFormatted = email ? email.replace(/\./g, '') : '';

    const onVideoAuthorClickHandler = () => {
        dispatch(setCreatorEmail({ email }));
        navigate(`../../../user/channel/${currentUserEmailFormatted}`);
    };

    const onVideoCompClickHandler = () => {
        dispatch(
            setCurrentVideo({
                videoObj,
            }),
        );
        isClickAble ? navigate(`../../../video/${videoId}`) : '';
    };

    return (
        <div className={`${className} creator__video `}>
            <div
                className='creator__video__edit'
                onClick={() => {
                    setVideoMenu(!videoMenu);
                }}
            >
                <div className={`${videoMenu ? 'active' : ''} creator__video__dots-wr`}>
                    <IconRenderer id='dots' className='dots' />
                    <p className={`${videoMenu ? 'active' : ''} creator__video_view-later`} onClick={addToViewLater}>
                        View later
                    </p>
                </div>
            </div>
            <img className='creator__video__preview' src={previewUrl} onClick={onVideoCompClickHandler} />
            <div className='creator__video__bottom'>
                <div className='creator__video__bottom_title'>{title}</div>
                {author ? (
                    <div className='creator__video_author-wr' onClick={onVideoAuthorClickHandler}>
                        <div className='creator__video_author'>
                            {authorPicUrl ? (
                                <picture>
                                    <img className='creator__video_author_img' alt='author img' src={authorPicUrl} />
                                </picture>
                            ) : (
                                <picture>
                                    <source src={defaultUserW}></source>
                                    <img className='creator__video_author_img' alt='author img' src={defaultUser} />
                                </picture>
                            )}
                            <p className='creator__video_author_text'>{fName ? `${fName} ${lName}` : 'unknown'}</p>
                        </div>
                        <div className='creator__video__bottom_date'>{date === 'NaN' ? 'unknown' : +date > 30 ? 'Long ago' : +date < 1 ? 'Today' : `${date} days ago`}</div>
                    </div>
                ) : (
                    <div className='creator__video__bottom_date'>{date === 'NaN' ? 'unknown' : +date > 30 ? 'Long ago' : +date < 1 ? 'Today' : `${date} days ago`}</div>
                )}
            </div>
        </div>
    );
};

export type { IVideoComp };
export default Video;
