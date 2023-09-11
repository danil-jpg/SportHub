import React, { FC } from 'react';
import './InputContainer.scss';
import Input from '../Input/Input';

interface IInputContainer {
    placeholder?: string;
    value?: string | number;
    onChange?: () => void;
    className?: string;
    text: string;
}

const InputContainer: FC<IInputContainer> = ({ placeholder = '', value, onChange, className = '', text = 'hey' }) => {
    return (
        <div className='input__wr'>
            <p className='input__text'>{text}</p>
            <Input className={`${className} input`} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
};

export default InputContainer;
