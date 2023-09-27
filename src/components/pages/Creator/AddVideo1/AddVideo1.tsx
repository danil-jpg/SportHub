import React, { FC, useState } from 'react';
import './AddVideo.scss';
import Button from '../../../ui/Button/Button';
import pngLogoW from '../../../../assets/img/addvideo/addvideo.png?as=webp';
import { doc, getDoc, setDoc } from 'firebase/firestore';
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
    preview: File | null;
    category: string;
    description: string;
}

const AddVideo1: FC = () => {
    const [video, setVideo] = useState<File | null>(null);
    const [videoTitle, setVideoTitle] = useState<string>('');
    const [videoDescr, setVideoDescr] = useState<string>('');
    const [videoType, setVideoType] = useState<string | number>('');
    const [shopify, setShopify] = useState<string>('');
    const [preview, setPreview] = useState<File | null>(null);

    const videoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setVideo(e.target.files[0]);
        }
    };

    const dispatch = useAppDispatch();

    const selector = useAppSelector((state) => state.regSlice);

    const uploadVideo = async () => {
        if (!video) {
            return;
        }
        const filesFolderRef = ref(storage, `videos/${selector.regData.email}/${videoTitle}`);
        const previewsFolderRef = ref(storage, `previews/${selector.regData.email}/${videoTitle}`);

        try {
            const videoRes = await uploadBytes(filesFolderRef, video);
            const previewRes = await uploadBytes(previewsFolderRef, video);
            console.log(videoRes, previewRes);
        } catch (e) {
            alert(e);
        }
    };

    return (
        <div className='addvideo'>
            <div className='addvideo__top'>
                <p className='addvideo__text'>Adding a new video</p>
                <Button
                    className='addvideo__btn btn-innactive'
                    onClickHandler={async () => {
                        const oldData = await getDoc(doc(DB, 'users', selector.regData.email)).then((res) => res.data()?.videos);
                        const res = await updateDoc(doc(DB, 'users', selector.regData.email), {
                            videos: [...oldData, { title: videoTitle, descr: videoDescr, category: videoType, shopify }],
                        });
                        await uploadVideo();
                        // console.log(oldData);
                    }}
                >
                    Publish
                </Button>
            </div>
            <div className='addvideo__dragAndDrop-section'>
                <input type='file' onChange={videoHandler} className='addvideo__input' />
                <img src={pngLogoW} className='addvideo__img' />
                <p className='addvideo__drag-text'>Drag and drop videos to upload</p>
                <Button className='addvideo__btn-addvideo'>Or choose files</Button>
            </div>
            <div className='addvideo__bottom'>
                <div className='addvideo__bottom__left'>
                    <InputContainer
                        className='addvideo__bottom__input'
                        text='Title'
                        placeholder='Video Name'
                        value={videoTitle}
                        onChangeHandler={(e) => setVideoTitle(e.target.value)}
                    />
                    <SelectContainer
                        value={videoType}
                        setValue={setVideoType}
                        containerClassName='addvideo__bottom__input'
                        arr={['Soul', 'Mind', 'Body']}
                        placeholder='Select category'
                        title='Category'
                    />
                    <InputContainer
                        className='addvideo__bottom__input'
                        text='Description'
                        placeholder='Description'
                        value={videoDescr}
                        onChangeHandler={(e) => setVideoDescr(e.target.value)}
                    />
                    <InputContainer
                        className='addvideo__bottom__input'
                        text='Add Shopify link'
                        placeholder='Add link on product'
                        onChangeHandler={(e) => setShopify(e.target.value)}
                    />
                </div>
                <div className='addvideo__bottom__right'>
                    <input
                        type='file'
                        onChange={(e) => {
                            if (e.target.files) {
                                setPreview(e.target.files[0]);
                            }
                        }}
                        className='addvideo__input'
                    />
                    {preview ? (
                        <img src={URL.createObjectURL(preview)} className='addvideo__preview' />
                    ) : (
                        <>
                            <img src={pngLogoW} className='addvideo__right_img' />
                            <p className='addvideo__right_text'>Drag and drop photo to upload</p>
                            <p className='addvideo__right_descr'>Information about adding photo. Amet minim mollit non deserunt ullamco est sit </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddVideo1;
