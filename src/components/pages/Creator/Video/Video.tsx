import React, { FC } from 'react';
import './Video.scss';
import IconRenderer from '../../../ui/IconRenderer/IconRenderer';
import { title } from 'process';

interface IVideo {
    title: string;
    date: number | string;
    preview: string;
}

const Video: FC<IVideo> = ({ title = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...', date = 'Long ago', preview = '' }) => {
    console.log(Object.is(NaN, date));
    return (
        <div className='creator__video'>
            <div className='creator__video__edit'>
                <div className='creator__video__dots-wr'>
                    <IconRenderer id='dots' className='dots' />
                </div>
            </div>
            <img className='creator__video__preview' src={preview} />
            <div className='creator__video__bottom'>
                <div className='creator__video__bottom_title'>{title}</div>
                <div className='creator__video__bottom_date'>{date === 'NaN' ? 'unknown' : +date > 30 ? 'Long age' : `${date} days ago`}</div>
            </div>
        </div>
    );
};

export default Video;
