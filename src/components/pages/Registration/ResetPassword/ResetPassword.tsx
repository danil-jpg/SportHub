import React, { FC, useState } from 'react';
import '../SignInUp.scss';
import Logo from '../../../common/Logo/Logo';
import RegistrationCouch from '../../../common/RegistrationCouch/RegistrationCouch';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    return (
        <div className='registration-container'>
            <RegistrationCouch />
            <div className='reg-form__wr'>
                <div className='reg-form__logo-wr'>
                    <Logo isReg={true} />
                </div>
                <form className='reg-form__form form'>
                    <p className='form__title'>Please check your inbox</p>
                    <p className='form__descr'>
                        Check your email "name@gmail.com" for instructions on how to reset your password. If it doesn’t appear within a few minutes, check your spam folder.
                    </p>
                    <div className='form__etc'>
                        Didn't receive the email?
                        <span>
                            <Link to={'../404'}>Go to Support</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
