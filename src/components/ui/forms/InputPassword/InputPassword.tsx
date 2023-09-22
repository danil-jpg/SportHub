import React, { FC, useState, ChangeEventHandler } from 'react';
import './InputPassword.scss';
import IconRenderer from '../../IconRenderer/IconRenderer';

interface IInputPassword {
    placeholder?: string;
    value?: string | number;
    onChangeHandler?: ChangeEventHandler<HTMLInputElement>;
    className?: string;
}

const InputPassword: FC<IInputPassword> = ({ placeholder = 'Your password', value, onChangeHandler, className = '' }) => {
    const [isShown, setIsShown] = useState<boolean>(false);

    return (
        <div className='input__wr'>
            <input className={`${className} input`} placeholder={placeholder} value={value} onChange={onChangeHandler} type={isShown ? 'text' : 'password'} />
            <IconRenderer id={'eye'} className={`${isShown ? 'active' : 'not-active'}`} onClick={() => setIsShown(!isShown)} />
        </div>
    );
};

export default InputPassword;
