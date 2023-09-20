import React, { FC, useState } from 'react';
import '../SignInUp.scss';
import InputContainer from '../../../ui/Forms/InputContainer/InputContainer';
import InputPasswordContainer from '../../../ui/Forms/InputPasswordContainer/InputPasswordContainer';
import Button from '../../../ui/Button/Button';
import Logo from '../../../common/Logo/Logo';
import { auth } from '../../../../config/firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import RegistrationCouch from '../../../common/RegistrationCouch/RegistrationCouch';
import { Link } from 'react-router-dom';

const SignIn: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onButtonClickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => console.log(res))
            .catch((e) => sweetAlert(e.message));
    };

    console.log(auth.currentUser?.email);

    return (
        <div className='registration-container'>
            <RegistrationCouch />
            <div className='reg-form__wr'>
                <div className='reg-form__logo-wr'>
                    <Logo isReg={true} />
                </div>
                <form className='reg-form__form form'>
                    <p className='form__title'>Sign in</p>
                    <InputContainer placeholder='Email' text='Email' value={email} onChangeHandler={(e) => setEmail(e.target.value)} />
                    <InputPasswordContainer placeholder='Your password' text='Password' value={password} onChangeHandler={(e) => setPassword(e.target.value)} />
                    <Button className='form__btn' onClickHandler={onButtonClickHandler}>
                        Sign in
                    </Button>
                    <div className='form__etc'>
                        Don’t have an account?
                        <span>
                            <Link to={'../signUp'}>Sign up</Link>
                        </span>
                    </div>
                    <div className='form__terms'>
                        <p>
                            By proceeding, you agree to our <span>Terms of Use</span> and <span>Privacy Policy</span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
