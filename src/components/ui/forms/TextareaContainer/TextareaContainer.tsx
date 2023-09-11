import React, { FC } from 'react';
import './TextareaContainer.scss';

interface ITextarea {
    placeholder?: string;
    value?: string | number;
    onChange?: () => void;
    className?: string;
    text: string;
}

const TextareaContainer: FC<ITextarea> = ({ placeholder = '', value, onChange, className = '', text = 'hey' }) => {
    return (
        <div className='textarea__wr'>
            <p className='textarea__text'>{text}</p>
            <textarea className={`${className} textarea`} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
};

export default TextareaContainer;
