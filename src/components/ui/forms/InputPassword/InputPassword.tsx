import React, { FC, useState } from 'react';
import './InputPassword.scss';
import IconRenderer from '../../IconRenderer/IconRenderer';

interface IInputPassword {
    placeholder?: string;
    value?: string | number;
    onChange?: () => void;
    className?: string;
}

const InputPassword: FC<IInputPassword> = ({ placeholder = 'Your password', value, onChange, className = '' }) => {
    const [isShown, setIsShown] = useState<boolean>(false);
    return (
        <div className='input__wr'>
            <input className={`${className} input`} placeholder={placeholder} value={value} onChange={onChange} type={isShown ? 'text' : 'password'} />
            <IconRenderer id={'eye'} className={`${isShown ? 'active' : ''}`} onClick={() => setIsShown(!isShown)} />
        </div>
    );
};

export default InputPassword;
