import React, { FC, useEffect, useState } from 'react';
import './AddPhoto.scss';
import picW from '../../../assets/img/registration/pic.png?as=webp';
import { useAppDispatch } from '../../hooks/redux';
import { setRegData } from '../../store/slices/registration';

interface IAddPhoto {
    classname: string;
    file: File | Blob | null;
    setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const AddPhoto: FC<IAddPhoto> = ({ file, setFile, classname = '' }) => {
    // const [file, setFile] = useState<File | string | null>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (file) {
            dispatch(
                setRegData({
                    file: URL.createObjectURL(file),
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
                    if (!e.target.files || e.target.files[0] === null) return;
                    // setFile(URL.createObjectURL(e.target.files[0]));
                    setFile(e.target.files[0]);
                }}
            />
            <img className='info__img' src={`${!file ? picW : URL.createObjectURL(file)}`} />
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
