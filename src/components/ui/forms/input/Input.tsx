import React, { FC } from 'react';
import './Input.scss';

interface IInput {
    placeholder?: string;
    value?: string | number;
    onChange?: () => void;
    className?: string;
}

const Input: FC<IInput> = ({ placeholder = '', value, onChange, className = '' }) => {
    return (
        <div>
            <input className={`${className} input`} placeholder={placeholder} value={value} onChange={onChange} type={'text'} />
        </div>
    );
};

export default Input;
