import React, { FC } from 'react';
import './Video.scss';
import IconRenderer from '../../../ui/IconRenderer/IconRenderer';

interface IVideoComp {
    title: string;
    date?: number | string;
    previewUrl: string;
    videoArr?: IVideoComp[];
    className?: string;
    onClickFoo?: any;
}

const Video: FC<IVideoComp> = ({ title = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...', date = 'Long ago', previewUrl = '', className = '' }) => {
    return (
        <div className={`${className} creator__video `}>
            {/* <div className='creator__video__edit'> */}
            {/* <div className='creator__video__dots-wr'> */}
            {/* <IconRenderer id='dots' className='dots' /> */}
            {/* <p className='creator__video_delete'>Delete</p> */}
            {/* </div> */}
            {/* </div> */}
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
