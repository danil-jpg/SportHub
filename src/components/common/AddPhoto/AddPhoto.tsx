import React, { FC } from 'react';
import './AddPhoto.scss';
import picW from '../../../assets/img/registration/pic.png?as=webp';

interface IAddPhoto {
    classname: string;
}

const AddPhoto: FC<IAddPhoto> = ({ classname = '' }) => {
    return (
        <div className={`${classname} info__img-block`}>
            <img className='info__img' src={picW} />
            <div className='info__img_texts'>
                <p className='info__img_title'>Information about adding photo</p>
                <p className='info__img_descr'>
                    Information about adding photo. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
            </div>
        </div>
    );
};

export default AddPhoto;
