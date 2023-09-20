import React, { FC, useEffect, useState } from 'react';
import './AddPhoto.scss';
import picW from '../../../assets/img/registration/pic.png?as=webp';
import { useAppDispatch } from '../../hooks/redux';
import { setRegData } from '../../store/slices/registration';

interface IAddPhoto {
    classname: string;
}

const AddPhoto: FC<IAddPhoto> = ({ classname = '' }) => {
    const [file, setFile] = useState<FileList | string | null>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (file) {
            dispatch(
                setRegData({
                    file: file,
                }),
            );
        }
    }, [file]);

    return (
        <div className={`${classname} info__img-block`}>
            <input
                type='file'
                className='info__input-file'
                onChange={(e) => {
                    if (!e.target.files) return;
                    setFile(URL.createObjectURL(e.target.files[0]));
                    console.log(file);
                }}
            />
            <img className='info__img' src={`${!file ? picW : file}`} />
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
