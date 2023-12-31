import React, { FC, useEffect, useState } from 'react';
import InputRadio from '../../../ui/Forms/InputRadio/InputRadio';
import InputContainer from '../../../ui/Forms/InputContainer/InputContainer';
import Button from '../../../ui/Button/Button';
import './PersonalInfo.scss';
import AddPhoto from '../../../common/AddPhoto/AddPhoto';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { setRegData } from '../../../store/slices/registration';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { DB, storage } from '../../../../config/firebase-config';
import swal from 'sweetalert';

const PersonalInfo: FC = () => {
    const [file, setFile] = useState<File | null | string>(null);

    const [radio, setRadio] = useState<string>('');

    const [type, setType] = useState<string>('');

    const [birthday, setBirthday] = useState<string>('');

    const [photoUrl, setPhotoUrl] = useState<string>('');

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const selector = useAppSelector((state) => state.regSlice);

    useEffect(() => {
        dispatch(
            setRegData({
                videos: [],
                playlists: [],
                birthday,
                type,
                gender: radio,
            }),
        );
    }, [photoUrl, type, birthday, radio]);

    const uploadFile = async () => {
        if (!file) {
            return;
        }
        const filesFolderRef = ref(storage, `users-avatar/${selector.regData.email}`);
        try {
            typeof file !== 'string' ? await uploadBytes(filesFolderRef, file) : '';
        } catch (e) {
            alert(e);
        }
    };

    const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadio(e.target.value);
    };

    const onInputTypeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setType(e.target.value);
    };

    const onButtonSignUpClickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            if (radio && type && birthday && file) {
                await uploadFile();
                const res = await getDownloadURL(ref(storage, `users-avatar/${selector.regData.email}`));
                setPhotoUrl(res);
                await setDoc(doc(DB, 'users', selector.regData.email), {
                    ...selector.regData,
                    photoUrl: res,
                    birthday,
                    type,
                    gender: radio,
                });
                navigate('../../');
            } else {
                swal('Fill up all the fields');
                console.log(radio, type, birthday, file);
            }
        } catch (e) {
            alert(e);
        }
    };

    return (
        <div className=' info'>
            <p className='info__title'>Personal Information</p>
            <AddPhoto file={file} setFile={setFile} classname='info__addPhoto' />
            <div className='info__radio-wr'>
                <p className='info__radio_text'>Gender</p>
                <div className='info__radio-line'>
                    <form>
                        <InputRadio checked={radio === 'Male'} value={'Male'} onChange={onInputChangeHandler} text='Male' name='Male' id='Male'></InputRadio>
                        <InputRadio checked={radio === 'Female'} value={'Female'} onChange={onInputChangeHandler} text='Female' name='Female' id='Female'></InputRadio>
                        <InputRadio checked={radio === 'None'} value={'None'} onChange={onInputChangeHandler} text='None' name='None' id='None'></InputRadio>
                    </form>
                </div>
            </div>
            <div className='info__radio-wr info__radio_type'>
                <p className='info__radio_text'>Type</p>
                <div className='info__radio-line'>
                    <form>
                        <InputRadio checked={type === 'User'} value={'User'} onChange={onInputTypeChangeHandler} text='User' name='User' id='User'></InputRadio>
                        <InputRadio checked={type === 'Creator'} value={'Creator'} onChange={onInputTypeChangeHandler} text='Creator' name='Creator' id='Creator'></InputRadio>
                    </form>
                </div>
            </div>
            <InputContainer text='Date of birthday' className='info__date' placeholder='MM.DD.YYYY' value={birthday} onChangeHandler={(e) => setBirthday(e.target.value)} />
            <div className='info__bottom-buttons'>
                <Button type='transparent' onClickHandler={() => navigate(-1)}>
                    Back
                </Button>
                <Button onClickHandler={onButtonSignUpClickHandler}>Sign Up</Button>
            </div>
        </div>
    );
};

export default PersonalInfo;
