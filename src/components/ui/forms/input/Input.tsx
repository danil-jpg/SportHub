import React, { FC } from 'react';
import './Input.scss';

interface IInput {
    placeholder?: string;
    value?: string | number;
    type?: string;
    onChange?: () => void;
    className?: string;
}

const Input: FC<IInput> = ({ placeholder = '', value, onChange, className = '', type = 'text' }) => {
    return <input className={`${className} input`} placeholder={placeholder} value={value} onChange={onChange} type={type} />;
};

export default Input;
