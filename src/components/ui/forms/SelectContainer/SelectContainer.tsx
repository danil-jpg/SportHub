import React, { FC } from 'react';
import './SelectContainer.scss';
import Select from '../Select/Select';

interface ISelectContainer {
    containerClassName?: string;
    className?: string;
    arr: Array<string>;
    placeholder: string;
    title: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SelectContainer: FC<ISelectContainer> = ({
    value,
    setValue,
    containerClassName,
    className = '',
    placeholder = 'choose your category',
    arr = ['Soul', 'Mind', 'Body'],
    title,
}) => {
    return (
        <div className={`select-container ${containerClassName}`}>
            <p className='select-container_title'>{title}</p>
            <Select value={value} setValue={setValue} arr={arr} placeholder={placeholder} className={`${className}`} />
        </div>
    );
};

export default SelectContainer;
