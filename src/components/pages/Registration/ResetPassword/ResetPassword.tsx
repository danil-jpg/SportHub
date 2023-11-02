import React, { FC, useState } from 'react';
import '../SignInUp.scss';
import Logo from '../../../common/Logo/Logo';
import RegistrationCouch from '../../../common/RegistrationCouch/RegistrationCouch';
import { Link } from 'react-router-dom';
import InputContainer from '../../../ui/Forms/InputContainer/InputContainer';
import Button from '../../../ui/Button/Button';
import './ResetPassword.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../../config/firebase-config';
import swal from 'sweetalert';
import { setRegData } from '../../../store/slices/registration';

interface IReset {}

const ResetPassword: FC<IReset> = ({}) => {
    const selector = useAppSelector((state) => state.regSlice.regData.email);
    const [state, setState] = useState(1);

    const [email, setEmail] = useState('');

    const dispatch = useAppDispatch();

    const triggerResetEmail = async () => {
        setState(2);
        try {
            await sendPasswordResetEmail(auth, email);
            dispatch(
                setRegData({
                    email: email,
                }),
            );
        } catch (e: any) {
            swal(e);
        }
    };

    return (
        <div className='registration-container forgot-container'>
            <RegistrationCouch />
            {state === 1 ? (
                <div className='reg-form__wr'>
                    <div className='reg-form__logo-wr'>
                        <Logo isReg={true} />
                    </div>
                    <form className='reg-form__form form'>
                        <p className='form__title'>Forgot your password?</p>
                        <p className='form__descr'>Enter your email address and we'll send you instructions on how to reset your password</p>
                        <InputContainer text='Email' placeholder='Your Email' value={email} onChangeHandler={(e) => setEmail(e.target.value)}></InputContainer>
                        <Button className='email__send' onClickHandler={triggerResetEmail}>
                            Send Email
                        </Button>
                    </form>
                </div>
            ) : (
                <div className='reg-form__wr'>
                    <div className='reg-form__logo-wr'>
                        <Logo isReg={true} />
                    </div>
                    <form className='reg-form__form form'>
                        <p className='form__title'>Please check your inbox</p>
                        <p className='form__descr'>
                            Check your email {selector} for instructions on how to reset your password. If it doesn’t appear within a few minutes, check your spam folder.
                        </p>
                        <div className='form__etc'>
                            Didn't receive the email?
                            <span>
                                <Link to={'../404'}>Go to Support</Link>
                            </span>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ResetPassword;
