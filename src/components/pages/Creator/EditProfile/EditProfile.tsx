import React, { FC, useEffect, useState } from 'react';
import './EditProfile.scss';
import AddPhoto from '../../../common/AddPhoto/AddPhoto';
import Button from '../../../ui/Button/Button';
import InputContainer from '../../../ui/Forms/InputContainer/InputContainer';
import InputRadio from '../../../ui/Forms/InputRadio/InputRadio';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { DB, storage } from '../../../../config/firebase-config';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import TextareaContainer from '../../../ui/Forms/TextareaContainer/TextareaContainer';
import Loading from '../../../common/Loading/Loading';
import swal from 'sweetalert';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { setRegData } from '../../../store/slices/registration';
import { useNavigate } from 'react-router-dom';

const EditProfile: FC = () => {
    const [profilePhoto, setProfilePhoto] = useState<File | null | string>(null);
    const [coverPhoto, setCoverPhoto] = useState<File | null | string>(null);

    const [getStatus, setGetStatus] = useState<boolean>(false);

    const [radio, setRadio] = useState<string>('');
    const [fname, setFname] = useState<string>('');
    const [lname, setLName] = useState<string>('');
    const [birth, setBirth] = useState<string>('');
    const [adress, setAdress] = useState<string>('');
    const [shopify, setShopify] = useState<string>('');
    const [descr, setDescr] = useState<string>('');
    const [vimeo, setVimeo] = useState<string>('');
    const [inst, setInst] = useState<string>('');
    const [face, setFace] = useState<string>('');
    const [twitter, setTwitter] = useState<string>('');

    const selector = useAppSelector((state) => state.regSlice.regData);

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadio(e.target.value);
    };

    const onFNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFname(e.target.value);
    };
    const onLNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLName(e.target.value);
    };
    const onBirhHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBirth(e.target.value);
    };
    const onAdressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAdress(e.target.value);
    };
    const onShopifyHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShopify(e.target.value);
    };
    const onDescrHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescr(event.target.value);
    };
    const onVimeoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVimeo(e.target.value);
    };
    const onInstHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInst(e.target.value);
    };
    const onFaceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFace(e.target.value);
    };
    const onTwittHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTwitter(e.target.value);
    };
    const getUserData = async () => {
        try {
            const ref = await doc(DB, 'users', selector.email);
            const data = await getDoc(ref);
            setProfilePhoto(data.data()?.photoUrl);
            setCoverPhoto(data.data()?.coverPhotoUrl);
            setFname(data.data()?.fname);
            setLName(data.data()?.lname);
            setBirth(data.data()?.birthday);
            setAdress(data.data()?.adress);
            setShopify(data.data()?.shopify);
            setDescr(data.data()?.bio);
            setVimeo(data.data()?.vimeo);
            setInst(data.data()?.instagram);
            setFace(data.data()?.facebook);
            setTwitter(data.data()?.twitter);
            setRadio(data.data()?.gender);
            setGetStatus(true);

            dispatch(
                setRegData({
                    photoUrl: profilePhoto,
                }),
            );
        } catch (e) {
            console.error('Error', e);
        }
    };

    const handleOnSaveClick = async () => {
        try {
            uploadAvatar();
            uploadCover();
            const storageRefAvatar = await getDownloadURL(ref(storage, `users-avatar/${selector.email}`));
            const storageRefCover = await getDownloadURL(ref(storage, `users-cover/${selector.email}`));

            const documentRef = await doc(DB, 'users', selector.email);
            const objToChange = {
                photoUrl: storageRefAvatar,
                coverPhotoUrl: storageRefCover,
                fname,
                lname,
                birthday: birth,
                adress,
                shopify,
                bio: descr,
                vimeo,
                instagram: inst,
                facebook: face,
                twitter,
                gender: radio,
            };
            const res = await updateDoc(documentRef, objToChange)
                .then(() => {
                    swal('Successfully changed');
                    dispatch(
                        setRegData({
                            ...objToChange,
                        }),
                    );
                })
                .then(() => navigate('../home'));
        } catch (e) {
            console.error('Error', e);
        }
    };

    const uploadAvatar = async () => {
        if (!profilePhoto) {
            return;
        }
        const filesFolderRef = ref(storage, `users-avatar/${selector.email}`);
        try {
            typeof profilePhoto !== 'string' ? await uploadBytes(filesFolderRef, profilePhoto) : '';
        } catch (e) {
            alert(e);
        }
    };

    const uploadCover = async () => {
        if (!coverPhoto) {
            return;
        }
        const filesFolderRef = ref(storage, `users-cover/${selector.email}`);
        try {
            typeof coverPhoto !== 'string' ? await uploadBytes(filesFolderRef, coverPhoto) : '';
        } catch (e) {
            alert(e);
        }
    };

    useEffect(() => {
        getUserData();
    }, [getStatus]);

    if (!getStatus) return <Loading></Loading>;
    return (
        <div className='profile-edit'>
            <div className='profile__top'>
                <p className='profile__top_title'>Edit profile</p>
                <Button className='profile__top_btn' onClickHandler={handleOnSaveClick}>
                    Save
                </Button>
            </div>
            <div className='profile__img__wr'>
                <AddPhoto file={profilePhoto} setFile={setProfilePhoto} classname='' />
                <AddPhoto file={coverPhoto} setFile={setCoverPhoto} defaultImg={false} classname='' />
            </div>
            <div className='profile__inputs'>
                <InputContainer value={fname} onChangeHandler={onFNameChangeHandler} text='First Name' placeholder='Your First Name'></InputContainer>
                <div className='profile__gender'>
                    <p className='profile__gender-text'>Gender</p>
                    <div className='profile__radio'>
                        <InputRadio checked={radio === 'Male'} value={'Male'} onChange={onInputChangeHandler} text='Male' name='Male' id='Male'></InputRadio>
                        <InputRadio checked={radio === 'Female'} value={'Female'} onChange={onInputChangeHandler} text='Female' name='Female' id='Female'></InputRadio>
                        <InputRadio checked={radio === 'None'} value={'None'} onChange={onInputChangeHandler} text='None' name='None' id='None'></InputRadio>
                    </div>
                </div>
                <InputContainer value={lname} onChangeHandler={onLNameChangeHandler} text='Last Name' placeholder='Your Last Name'></InputContainer>
                <InputContainer value={birth} onChangeHandler={onBirhHandler} text='Date of birthday' placeholder='MM.DD.YYYY'></InputContainer>
                <InputContainer value={adress} onChangeHandler={onAdressHandler} text='Address' placeholder='Your Address'></InputContainer>
                <InputContainer value={shopify} onChangeHandler={onShopifyHandler} text='Shopify Link' placeholder='Shopify Link'></InputContainer>
                <div className='profile__inputs_descr'>
                    <TextareaContainer value={descr} onChangeHandler={onDescrHandler} text='Bio' placeholder='Your bio'></TextareaContainer>
                </div>
                <InputContainer value={vimeo} onChangeHandler={onVimeoHandler} text='Vimeo account' placeholder='Add your Vimeo account'></InputContainer>
                <InputContainer value={inst} onChangeHandler={onInstHandler} text='Instagram account' placeholder='Add your Instagram account'></InputContainer>
                <InputContainer value={face} onChangeHandler={onFaceHandler} text='Facebook  account' placeholder='Add your Facebook account'></InputContainer>
                <InputContainer value={twitter} onChangeHandler={onTwittHandler} text='Twitter account' placeholder='Add your Twitter account'></InputContainer>
            </div>
        </div>
    );
};

export default EditProfile;
