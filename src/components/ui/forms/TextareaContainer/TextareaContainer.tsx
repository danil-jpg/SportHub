import React, { FC } from 'react';
import './TextareaContainer.scss';

interface ITextarea {
    placeholder?: string;
    value?: string | number;
    onChangeHandler?: React.ChangeEventHandler<HTMLTextAreaElement>;
    className?: string;
    text: string;
}

const TextareaContainer: FC<ITextarea> = ({ placeholder = '', value, onChangeHandler, className = '', text = 'hey' }) => {
    return (
        <div className='textarea__wr'>
            <p className='textarea__text'>{text}</p>
            <textarea className={`${className} textarea`} placeholder={placeholder} value={value} onChange={onChangeHandler} />
        </div>
    );
};

export default TextareaContainer;
