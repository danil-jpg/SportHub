import React, { FC } from 'react';
import './Video.scss';
import IconRenderer from '../../../ui/IconRenderer/IconRenderer';

const Video: FC = () => {
    return (
        <div className='creator__video'>
            <div className='creator__video__edit'>
                <div className='creator__video__dots-wr'>
                    <IconRenderer id='dots' className='dots' />
                </div>
            </div>
            <img className='creator__video__preview' />
            <div className='creator__video__bottom'>
                <div className='creator__video__bottom_title'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...</div>
                <div className='creator__video__bottom_date'>3h ago</div>
            </div>
        </div>
    );
};

export default Video;
