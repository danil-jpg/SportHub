import React, { FC, useState } from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import RegistrationCouch from '../../../../common/RegistrationCouch/RegistrationCouch';
import Logo from '../../../../common/Logo/Logo';
import InputPasswordContainer from '../../../../ui/Forms/InputPasswordContainer/InputPasswordContainer';
import Button from '../../../../ui/Button/Button';
import { confirmPasswordReset } from 'firebase/auth';
import { auth } from '../../../../../config/firebase-config';

const ResetChangePassword: FC = () => {
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');

    const urlParams = new URLSearchParams(window.location.search);
    let oobCode: string | null = urlParams.get('oobCode');

    const onButtonClickHandler = async () => {
        if (newPassword === confirmNewPassword && confirmNewPassword.length > 5) {
            try {
                oobCode ? await confirmPasswordReset(auth, oobCode, newPassword) : null;
            } catch (e) {
                console.error(e);
            }
        }
    };
    return (
        <div className='registration-container'>
            <RegistrationCouch />
            <div className='reg-form__wr'>
                <div className='reg-form__logo-wr'>
                    <Logo isReg={true} />
                </div>
                <form className='reg-form__form form'>
                    <p className='form__title'>Restore password</p>
                    <InputPasswordContainer placeholder='New Password' text='New Password' value={newPassword} onChangeHandler={(e) => setNewPassword(e.target.value)} />
                    <InputPasswordContainer
                        placeholder='Confirm Password'
                        text='Confirm Password'
                        value={confirmNewPassword}
                        onChangeHandler={(e) => setConfirmNewPassword(e.target.value)}
                    />
                    <Button className='form__btn' onClickHandler={onButtonClickHandler}>
                        Save
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ResetChangePassword;
