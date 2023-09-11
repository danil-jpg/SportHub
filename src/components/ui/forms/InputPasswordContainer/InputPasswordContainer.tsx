import React, { FC } from 'react';
import './InputPasswordContainer.scss';
import InputPassword from '../InputPassword/InputPassword';

interface IInputPasswordContainer {
    placeholder?: string;
    value?: string | number;
    onChange?: () => void;
    className?: string;
    text: string;
}

const InputPasswordContainer: FC<IInputPasswordContainer> = ({ placeholder = '', value, onChange, className = '', text = 'def' }) => {
    return (
        <div className='input__wr'>
            <p className='input__text'>{text}</p>
            <InputPassword className={`${className} input`} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
};

export default InputPasswordContainer;
