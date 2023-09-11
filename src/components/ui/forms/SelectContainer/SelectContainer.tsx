import React, { FC } from 'react';
import './SelectContainer.scss';
import Select from '../Select/Select';

interface ISelectContainer {
    className?: string;
    arr: Array<string>;
    placeholder: string;
    title: string;
}

const SelectContainer: FC<ISelectContainer> = ({ className = '', placeholder = 'choose your category', arr = ['Soul', 'Mind', 'Body'], title }) => {
    return (
        <div className='select-container'>
            <p className='select-container_title'>{title}</p>
            <Select arr={arr} placeholder={placeholder} className={`${className}`} />
        </div>
    );
};

export default SelectContainer;
