import React, { Dispatch, FC, SetStateAction, ChangeEventHandler } from 'react';
import './InputContainer.scss';
import Input from '../Input/Input';

interface IInputContainer {
    placeholder?: string;
    value?: string | number;
    onChangeHandler?: ChangeEventHandler<HTMLInputElement>;
    className?: string;
    text: string;
}

const InputContainer: FC<IInputContainer> = ({ placeholder = '', value, onChangeHandler, className = '', text = 'def' }) => {
    return (
        <div className='input__wr'>
            <p className='input__text'>{text}</p>
            <Input className={`${className} input`} placeholder={placeholder} value={value} onChangeHandler={onChangeHandler} />
        </div>
    );
};

export default InputContainer;
