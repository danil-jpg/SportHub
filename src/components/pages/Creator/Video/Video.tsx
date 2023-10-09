import React, { FC } from 'react';
import './Video.scss';
import IconRenderer from '../../../ui/IconRenderer/IconRenderer';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { DB } from '../../../../config/firebase-config';
interface IVideoComp {
    title: string;
    date?: number | string;
    previewUrl: string;
    videoArr?: IVideoComp[];
    className?: string;
    onClickFoo?: any;
    index?: number | string;
}

const Video: FC<IVideoComp> = ({ title = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...', date = 'Long ago', previewUrl = '', className = '' }) => {
    const navigate = useNavigate();
    const selector = useAppSelector((state) => state.regSlice.regData);

    const deleteFromFirebase = async (index: number | string, itemToDelete: string, navigateTo: string): Promise<void> => {
        const ref = await doc(DB, 'users', selector.email);
        const data = await getDoc(ref);

        const newArr = [...data.data()?.videos];
        newArr.splice(+index, 1);

        updateDoc(ref, { videos: newArr })
            .then(() => {
                console.log('Worked');
                navigate(navigateTo);
            })
            .catch((e) => console.log('error'));
    };

    return (
        <div
            className={`${className} creator__video `}
            onClick={() => {
                // deleteFromFirebase(index, 'videos', '');
            }}
        >
            <div className='creator__video__edit'>
                <div className='creator__video__dots-wr'>
                    <IconRenderer id='dots' className='dots' />
                    <p className='creator__video_delete'>Delete</p>
                </div>
            </div>
            <img className='creator__video__preview' src={previewUrl} />
            <div className='creator__video__bottom'>
                <div className='creator__video__bottom_title'>{title}</div>
                <div className='creator__video__bottom_date'>{date === 'NaN' ? 'unknown' : +date > 30 ? 'Long ago' : +date < 1 ? 'Today' : `${date} days ago`}</div>
            </div>
        </div>
    );
};

export type { IVideoComp };
export default Video;
