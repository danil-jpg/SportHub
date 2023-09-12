import React from 'react';
import './SignUp.scss';
import IconRenderer from '../../../ui/IconRenderer/IconRenderer';
import InputContainer from '../../../ui/Forms/InputContainer/InputContainer';
import InputPasswordContainer from '../../../ui/Forms/InputPasswordContainer/InputPasswordContainer';
import Button from '../../../ui/Button/Button';
import Logo from '../../../common/Logo/Logo';

const RegistrationCouch = React.lazy(() => import('../../../common/RegistrationCouch/RegistrationCouch'));

const SignUp = () => {
    return (
        <div className='registration-container'>
            <RegistrationCouch />
            <div className='reg-form__wr'>
                <div className='reg-form__logo-wr'>
                    <Logo />
                </div>
                <form className='reg-form__form form'>
                    <p className='form__title'>Sign up</p>
                    <InputContainer placeholder='Your First Name' text='First Name' />
                    <InputContainer placeholder='Your Last Name' text='Last Name' />
                    <InputContainer placeholder='Your Email' text='Email' />
                    <InputPasswordContainer placeholder='Your password' text='Password' />
                    <Button className='form__btn'>Sign in</Button>
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
    );
};

export default SignUp;
