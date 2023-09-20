import React, { FC, useState } from 'react';
import pic from '../../../../assets/img/registration/pic.png';
import picW from '../../../../assets/img/registration/pic.png?as=webp';
import InputRadio from '../../../ui/Forms/InputRadio/InputRadio';
import InputContainer from '../../../ui/Forms/InputContainer/InputContainer';
import Button from '../../../ui/Button/Button';
import './PersonalInfo.scss';
import AddPhoto from '../../../common/AddPhoto/AddPhoto';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { setRegData } from '../../../store/slices/registration';

const PersonalInfo: FC = () => {
    const [radio, setRadio] = useState<string>('');

    const [birthday, setBirthday] = useState('');

    const navigate = useNavigate();

    const selector = useAppSelector((state) => state.regSlice);
    console.log(selector);

    const dispatch = useAppDispatch();

    const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadio(e.target.value);
    };

    const onButtonSignUpClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(
            setRegData({
                gender: radio,
                birthday,
            }),
        );
    };

    return (
        <div className=' info'>
            <p className='info__title'>Personal Information</p>
            <AddPhoto classname='info__addPhoto' />
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
