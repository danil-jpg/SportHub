import React, { FC, useState } from 'react';
import './Video.scss';
import IconRenderer from '../../../ui/IconRenderer/IconRenderer';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { DB } from '../../../../config/firebase-config';
import defaultUser from '../../../../assets/img/user/card/default-user.jpg';
import defaultUserW from '../../../../assets/img/user/card/default-user.jpg?as=webp';

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
}

const Video: FC<IVideoComp> = ({
    author = false,
    authorPicUrl,
    fName,
    lName,
    title = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...',
    date = 'Long ago',
    previewUrl = '',
    className = '',
}) => {
    const [videoMenu, setVideoMenu] = useState(false);
    const selector = useAppSelector((state) => state.regSlice.regData);

    const addToViewLater = async (index: number | string, itemToAdd: string): Promise<void> => {
        const ref = await doc(DB, 'users', selector.email);
        const data = await getDoc(ref);

        const newArr = [...data.data()?.viewLater];
    };

    return (
        <div className={`${className}   creator__video `}>
            <div
                className='creator__video__edit'
                onClick={() => {
                    setVideoMenu(!videoMenu);
                }}
            >
                <div className={`${videoMenu ? 'active' : ''} creator__video__dots-wr`}>
                    <IconRenderer id='dots' className='dots' />
                    <p className={`${videoMenu ? 'active' : ''} creator__video_view-later`}>View later</p>
                </div>
            </div>
            <img className='creator__video__preview' src={previewUrl} />
            <div className='creator__video__bottom'>
                <div className='creator__video__bottom_title'>{title}</div>
                {author ? (
                    <div className='creator__video_author-wr'>
                        <div className='creator__video_author'>
                            {authorPicUrl ? (
                                <picture>
                                    <source src={''}></source>
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
