import React, { FC, useEffect, useState } from 'react';
import '../SignInUp.scss';
import InputContainer from '../../../ui/Forms/InputContainer/InputContainer';
import InputPasswordContainer from '../../../ui/Forms/InputPasswordContainer/InputPasswordContainer';
import Button from '../../../ui/Button/Button';
import Logo from '../../../common/Logo/Logo';
import { auth } from '../../../../config/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import RegistrationCouch from '../../../common/RegistrationCouch/RegistrationCouch';
import Loading from '../../../common/Loading/Loading';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setRegData } from '../../../store/slices/registration';
import { Link } from 'react-router-dom';

const SignUp: FC = () => {
    const [fname, setFname] = useState<string>('');
    const [lname, setLname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useAppDispatch();

    const onButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(
            setRegData({
                fname: fname,
                lname: lname,
                email: email,
                password: password,
            }),
        );
        console.log(selector);

        // try {
        //     // await createUserWithEmailAndPassword(auth, email, password);
        // } catch (err) {
        //     console.log(err);
        // }
    };

    useEffect(() => {}, [fname, lname]);

    const selector = useAppSelector((state) => state.regSlice);
    console.log(selector);

    // console.log(auth.currentUser?.email);
    return (
        <div>
            <div className='registration-container'>
                <RegistrationCouch />
                <div className='reg-form__wr'>
                    <div className='reg-form__logo-wr'>
                        <Logo isReg={false} />
                    </div>
                    <form className='reg-form__form form'>
                        <p className='form__title'>Sign up</p>
                        <InputContainer placeholder='Your First Name' text='First Name' onChangeHandler={(e) => setFname(e.target.value)} value={fname} />
                        <InputContainer placeholder='Your Last Name' text='Last Name' onChangeHandler={(e) => setLname(e.target.value)} value={lname} />
                        <InputContainer value={email} onChangeHandler={(e) => setEmail(e.target.value)} placeholder='Your Email' text='Email' />
                        <InputPasswordContainer onChangeHandler={(e) => setPassword(e.target.value)} placeholder='Your password' text='Password' value={password} />
                        <Button className='form__btn' onClickHandler={onButtonClickHandler}>
                            <Link to={'../personalInfo'}>Sign up</Link>
                        </Button>
                        <div className='form__etc'>
                            Already have an account?<span>Sign in</span>
                        </div>
                        <div className='form__terms'>
                            <p>
                                By proceeding, you agree to our <span>Terms of Use</span> and <span>Privacy Policy</span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
