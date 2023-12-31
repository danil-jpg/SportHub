import React, { FC, useEffect, useState } from 'react';
import './AddPhoto.scss';
import picW from '../../../assets/img/registration/pic.png?as=webp';
import nonDefaultPicW from '../../../assets/img/editProfile/hero banner.png?as=webp';
import { useAppDispatch } from '../../hooks/redux';
import { setRegData } from '../../store/slices/registration';
import Loading from '../Loading/Loading';
import swal from 'sweetalert';

interface IAddPhoto {
    classname: string;
    file: File | Blob | string | null;
    setFile: React.Dispatch<React.SetStateAction<File | null | string>>;
    defaultImg?: boolean;
}

const AddPhoto: FC<IAddPhoto> = ({ file, setFile, classname = '', defaultImg = true }) => {
    const allowedTypesImg = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (file) {
            dispatch(
                setRegData({
                    file: typeof file === 'string' ? file : React.isValidElement(file) ? '' : URL.createObjectURL(file),
                }),
            );
        }
    }, [file]);

    const imgConditionalRendering = () => {
        if (file === 'loading') {
            return (
                <div className='snippet' data-title='dot-pulse'>
                    <div className='stage'>
                        <div className='dot-pulse'></div>
                    </div>
                </div>
            );
        } else if (defaultImg) {
            return <img className='info__img' src={`${!file ? picW : typeof file === 'string' ? file : URL.createObjectURL(file)}`} />;
        } else {
            return <img className='info__img' src={`${!file ? nonDefaultPicW : typeof file === 'string' ? file : URL.createObjectURL(file)}`} />;
        }
    };

    const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files[0].size > 26097152) {
            swal('File is too big! Max size is 25 mb');
            e.target.value = '';
        } else if (!allowedTypesImg.includes(e.target.files[0]?.type)) {
            swal('File must be jpeg,png,gif or webp format');
        } else {
            setFile(e.target.files[0]);
        }
    };

    return (
        <div className={`${classname} info__img-block`}>
            <input
                accept='image/*'
                type='file'
                className='info__input-file'
                onChange={(e) => {
                    if (!e.target.files || e.target.files[0] === null) return;

                    imageHandler(e);
                }}
            />
            {imgConditionalRendering()}

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
