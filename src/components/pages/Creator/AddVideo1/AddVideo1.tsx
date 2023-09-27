import React, { useState } from 'react';
import './AddVideo.scss';
import Button from '../../../ui/Button/Button';
import pngLogoW from '../../../../assets/img/addvideo/addvideo.png?as=webp';
import { doc, setDoc } from 'firebase/firestore';
import { DB, storage } from '../../../../config/firebase-config';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { setRegData } from '../../../store/slices/registration';
import { ref, uploadBytes, getDownloadURL, connectStorageEmulator } from 'firebase/storage';
import { updateDoc } from 'firebase/firestore';
import InputContainer from '../../../ui/Forms/InputContainer/InputContainer';
import SelectContainer from '../../../ui/Forms/SelectContainer/SelectContainer';
import pngPicW from '../../../../assets/img/addvideo/addvideo-white.png?as=webp';

interface IObject {
    name: string;
    date: number;
    prevew: File | null;
    category: string;
    description: string;
}

const AddVideo1 = () => {
    const [video, setVideo] = useState<File | null>(null);
    const [videoName, setVideoName] = useState('4');
    const [prevew, setPreview] = useState<File | null>(null);

    const videoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setVideo(e.target.files[0]);
            console.log(e.target.files[0]);
        }
    };

    const dispatch = useAppDispatch();

    const selector = useAppSelector((state) => state.regSlice);

    const uploadVideo = async () => {
        if (!video) {
            return;
        }
        const filesFolderRef = ref(storage, `videos/${selector.regData.email}/${videoName}`);
        const res = await updateDoc(doc(DB, 'users', selector.regData.email), {
            videos: [{ name: 'shrekorabbit' }, { name: 'waterfall' }],
        });

        try {
            const res = await uploadBytes(filesFolderRef, video);
            console.log(res);
        } catch (e) {
            alert(e);
        }
    };

    return (
        <div className='addvideo'>
            <div className='addvideo__top'>
                <p className='addvideo__text'>Adding a new video</p>
                <Button className='addvideo__btn btn-innactive'>Continue</Button>
            </div>
            <div className='addvideo__dragAndDrop-section'>
                <input type='file' onChange={videoHandler} className='addvideo__input' />
                <img src={pngLogoW} className='addvideo__img' />
                <p className='addvideo__drag-text'>Drag and drop videos to upload</p>
                <Button className='addvideo__btn-addvideo' onClickHandler={() => uploadVideo()}>
                    Or choose files
                </Button>
            </div>
            <div className='addvideo__bottom'>
                <div className='addvideo__bottom__left'>
                    <InputContainer className='addvideo__bottom__input' text='Title' placeholder='Video Name' />
                    <SelectContainer containerClassName='addvideo__bottom__input' arr={['Soul', 'Mind', 'Body']} placeholder='Select category' title='Category' />
                    <InputContainer className='addvideo__bottom__input' text='Description' placeholder='Description' />
                    <InputContainer className='addvideo__bottom__input' text='Add Shopify link' placeholder='Add link on product' />
                </div>
                <div className='addvideo__bottom__right'>
                    <input type='file' onChange={videoHandler} className='addvideo__input' />
                    <img src={pngLogoW} className='addvideo__right_img' />
                    <p className='addvideo__right_text'>Drag and drop photo to upload</p>
                    <p className='addvideo__right_descr'>Information about adding photo. Amet minim mollit non deserunt ullamco est sit </p>
                </div>
            </div>
        </div>
    );
};

export default AddVideo1;
