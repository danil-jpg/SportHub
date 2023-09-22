import React, { FC, useEffect, useState } from 'react';
import RegistrationCouch from '../../../common/RegistrationCouch/RegistrationCouch';
import Logo from '../../../common/Logo/Logo';
import InputPasswordContainer from '../../../ui/Forms/InputPasswordContainer/InputPasswordContainer';
import Button from '../../../ui/Button/Button';
import { confirmPasswordReset, getAuth } from 'firebase/auth';
import { auth } from '../../../../config/firebase-config';
import '../../Registration/SignInUp.scss';
import swal from 'sweetalert';
import { useSearchParams } from 'react-router-dom';

const ResetChangePassword: FC = () => {
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');

    const [searchParams] = useSearchParams();

    let oobCode: string | null = searchParams.get('oobCode');

    const onButtonClickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (newPassword === confirmNewPassword && confirmNewPassword.length > 5) {
            try {
                console.log(oobCode);
                if (oobCode) {
                    await confirmPasswordReset(auth, oobCode, newPassword);
                }
                swal('PasswordChanged');
            } catch (e: any) {
                swal(e);
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