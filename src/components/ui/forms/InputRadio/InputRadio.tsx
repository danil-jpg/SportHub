import React, { FC } from 'react';
import './InputRadio.scss';

interface IRadio {
    id: string;
    text: string;
    name?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
    value: string;
}

const InputRadio: FC<IRadio> = ({ id, text, name, onChange, checked, value }) => {
    return (
        <label htmlFor={id} className='radiobutton-label'>
            <input className='radiobutton-input' type='radio' name={name} id={id} value={value} onChange={onChange} checked={checked} />
            <span className='custom-radiobutton' />
            {text}
        </label>
    );
};

export default InputRadio;
