import React, { FC, Dispatch, SetStateAction, ChangeEventHandler } from 'react';
import './Input.scss';

interface IInput {
    placeholder?: string;
    value?: string | number;
    onChangeHandler?: ChangeEventHandler<HTMLInputElement>;
    className?: string;
}

const Input: FC<IInput> = ({ placeholder = '', value, onChangeHandler, className = '' }) => {
    return (
        <div>
            <input className={`${className} input`} placeholder={placeholder} value={value} onChange={onChangeHandler} type={'text'} />
        </div>
    );
};

export default Input;
