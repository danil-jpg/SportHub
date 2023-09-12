import React, { FC, ChangeEventHandler } from 'react';
import './InputPasswordContainer.scss';
import InputPassword from '../InputPassword/InputPassword';

interface IInputPasswordContainer {
    placeholder?: string;
    value?: string | number;
    onChangeHandler?: ChangeEventHandler<HTMLInputElement>;
    className?: string;
    text: string;
}

const InputPasswordContainer: FC<IInputPasswordContainer> = ({ placeholder = '', value, onChangeHandler, className = '', text = 'def' }) => {
    return (
        <div className='input__wr'>
            <p className='input__text'>{text}</p>
            <InputPassword className={`${className} input`} placeholder={placeholder} value={value} onChangeHandler={onChangeHandler} />
        </div>
    );
};

export default InputPasswordContainer;
