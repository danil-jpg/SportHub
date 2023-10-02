import React, { FC, useEffect, useRef, useState } from 'react';
import './AddVideo.scss';
import Button from '../../../ui/Button/Button';
import pngLogoW from '../../../../assets/img/addvideo/addvideo.png?as=webp';
import { doc, getDoc } from 'firebase/firestore';
import { DB, storage } from '../../../../config/firebase-config';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL, connectStorageEmulator } from 'firebase/storage';
import { updateDoc } from 'firebase/firestore';
import InputContainer from '../../../ui/Forms/InputContainer/InputContainer';
import SelectContainer from '../../../ui/Forms/SelectContainer/SelectContainer';
import pngPicW from '../../../../assets/img/addvideo/addvideo-white.png?as=webp';
import swal from 'sweetalert';
import { v1 } from 'uuid';
import TextareaContainer from '../../../ui/Forms/TextareaContainer/TextareaContainer';

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
    const [videoType, setVideoType] = useState<string>('');
    const [shopify, setShopify] = useState<string>('');
    const [preview, setPreview] = useState<File | null>(null);
    const [publishButtonState, setPublishButtonState] = useState<boolean>(false);

    const [dragActive, setDragActive] = useState<boolean>(false);

    const [dragPreviewActive, setDragPreviewActive] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const uniqueId = v1();

    const allowedTypesImg = ['image/jpeg', 'image/png', 'image/gif'];
    const allowedTypesVideo = ['video/mp4', 'video/*', 'video/x-m4v'];

    const navigate = useNavigate();

    const handleDragEvent = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handlePrevewDragEvent = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragPreviewActive(true);
        } else if (e.type === 'dragleave') {
            setDragPreviewActive(false);
        }
    };

    const handlePrevewDropEvent = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragPreviewActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            if (e.dataTransfer.files[0].size > 4097152) {
                swal('File is too big! Max size is 4 mb');
            } else if (!allowedTypesImg.includes(e.dataTransfer.files[0]?.type)) {
                swal('File must be jpeg,png,gif or webp format');
            } else {
                setPreview(e.dataTransfer.files[0]);
            }
        }
    };

    const handleDropEvent = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            if (e.dataTransfer.files[0].size > 4097152) {
                swal('File is too big! Max size is 4 mb');
            } else if (!allowedTypesVideo.includes(e.dataTransfer.files[0]?.type)) {
                swal('File must be jpeg,png,gif or webp format');
            } else {
                setVideo(e.dataTransfer.files[0]);
            }
        }
    };

    const videoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files[0].size > 4097152) {
            swal('File is too big! Max size is 4 mb');
            e.target.value = '';
        } else {
            setVideo(e.target.files[0]);
        }
    };

    const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files[0].size > 4097152) {
            swal('File is too big! Max size is 4 mb');
            e.target.value = '';
        } else if (!allowedTypesImg.includes(e.target.files[0]?.type)) {
            swal('File must be jpeg,png,gif or webp format');
        } else {
            setPreview(e.target.files[0]);
        }
    };

    const dispatch = useAppDispatch();

    const selector = useAppSelector((state) => state.regSlice);

    const uploadVideo = async () => {
        if (!video || !preview) {
            return;
        }

        const filesFolderRef = ref(storage, `videos/${selector.regData.email}/${videoTitle}${uniqueId}`);
        const previewsFolderRef = ref(storage, `previews/${selector.regData.email}/${videoTitle}${uniqueId}`);

        try {
            const videoRes = await uploadBytes(filesFolderRef, video);
            const previewRes = await uploadBytes(previewsFolderRef, preview);
            // console.log(videoRes, previewRes);
        } catch (e) {
            let message = 'Unknown Error';
            if (e instanceof Error) message = e.message;
            console.error(message);
            swal('Something went wrong');
        }
    };

    useEffect(() => {
        if (preview && video && videoTitle && videoType && videoDescr) {
            setPublishButtonState(true);
        }
    }, [preview, videoTitle, videoType, videoDescr, video]);

    return (
        <div className='addvideo'>
            <div className='addvideo__top'>
                <p className='addvideo__text'>Adding a new video</p>
                <Button
                    className={`${publishButtonState ? '' : 'btn-innactive'}  addvideo__btn `}
                    onClickHandler={async () => {
                        if (preview && video && videoTitle && videoType && videoDescr) {
                            try {
                                await uploadVideo();
                                const oldData = await getDoc(doc(DB, 'users', selector.regData.email)).then((res) => res.data()?.videos);
                                const videoUrl = await getDownloadURL(ref(storage, `videos/${selector.regData.email}/${videoTitle}${uniqueId}`));
                                const previewUrl = await getDownloadURL(ref(storage, `previews/${selector.regData.email}/${videoTitle}${uniqueId}`));

                                console.log(videoUrl, previewUrl);
                                if (oldData) {
                                    await updateDoc(doc(DB, 'users', selector.regData.email), {
                                        videos: [
                                            ...oldData,
                                            { title: videoTitle, descr: videoDescr, category: videoType, shopify, videoUrl, previewUrl, date: new Date().toString() },
                                        ],
                                    });
                                } else {
                                    await updateDoc(doc(DB, 'users', selector.regData.email), {
                                        videos: [{ title: videoTitle, descr: videoDescr, category: videoType, shopify, videoUrl, previewUrl, date: new Date().toString() }],
                                    });
                                }
                                swal('Your video is successfully published').then(() => {
                                    if (selector.regData?.type === 'Creator') {
                                        navigate('../home');
                                    } else {
                                        navigate('../');
                                    }
                                });
                            } catch (e) {
                                console.error(e);
                                swal('Something went wrong');
                            }
                        } else if (videoType === 'Select category') {
                            swal('Please,choose video type');
                        } else {
                            swal('Please,write in all the fields , put video and its preview in the corresponding items');
                        }
                    }}
                >
                    Publish
                </Button>
            </div>
            <form className='addvideo__dragAndDrop-section' onDragEnter={handleDragEvent} onSubmit={(e) => e.preventDefault()}>
                {video ? (
                    <video controls className='addvideo__video'>
                        <source src={URL.createObjectURL(video)}></source>
                    </video>
                ) : (
                    <>
                        <input ref={inputRef} id='input__addvideo' type='file' onChange={videoHandler} className='addvideo__input' accept='video/mp4,video/x-m4v,video/*' />
                        <label htmlFor='input__addvideo' className={dragActive ? 'active addvideo__drag-text' : 'addvideo__drag-text'}>
                            <img src={pngLogoW} className='addvideo__img' />
                            <p>Drag and drop videos to upload</p>
                            <Button
                                className='addvideo__btn-addvideo'
                                onClickHandler={(e) => {
                                    e.preventDefault();
                                    inputRef.current?.click();
                                }}
                            >
                                Or choose files
                            </Button>
                        </label>
                        {dragActive && (
                            <div
                                className='addvideo__drag-file-element'
                                onDragEnter={handleDragEvent}
                                onDragLeave={handleDragEvent}
                                onDragOver={handleDragEvent}
                                onDrop={handleDropEvent}
                            ></div>
                        )}
                    </>
                )}
            </form>
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
                    <TextareaContainer
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
                <form
                    id='preview-form'
                    onDragEnter={() => {
                        setDragPreviewActive(true);
                    }}
                    onSubmit={(e) => e.preventDefault()}
                    className={`${dragPreviewActive ? 'active' : ''} addvideo__bottom__right`}
                >
                    <input
                        accept='image/png, image/gif, image/jpeg , image/webp, image/*'
                        onDragEnter={handlePrevewDragEvent}
                        onDragLeave={handlePrevewDragEvent}
                        onDragOver={handlePrevewDragEvent}
                        onDrop={handlePrevewDropEvent}
                        multiple={false}
                        type='file'
                        id='preview-form'
                        onChange={(e) => {
                            imageHandler(e);
                        }}
                        className='addvideo__input-preview'
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
                </form>
            </div>
        </div>
    );
};

export default AddVideo1;
