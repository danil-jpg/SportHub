import React from 'react';
import './AddVideo.scss';
import Button from '../../../ui/Button/Button';
import pngLogoW from '../../../../assets/img/addvideo/addvideo.png?as=webp';

const AddVideo1 = () => {
    return (
        <div className='addvideo'>
            <div className='addvideo__top'>
                <p className='addvideo__text'>Adding a new video</p>
                <Button className='addvideo__btn btn-innactive'>Continue</Button>
            </div>
            <div className='addvideo__dragAndDrop-section'>
                <img src={pngLogoW} className='addvideo__img' />
                <p className='addvideo__drag-text'>Drag and drop videos to upload</p>
                <Button className='addvideo__btn-addvideo'>Or choose files</Button>
            </div>
        </div>
    );
};

export default AddVideo1;
