import React, { useState, useRef, useEffect, FC } from 'react';
import IconRenderer from '../../IconRenderer/IconRenderer';
import './Select.scss';

interface ISelect {
    className?: string;
    arr: Array<string>;
    placeholder: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Select: FC<ISelect> = ({ value, setValue, className = '', placeholder = 'choose your category', arr = ['Soul', 'Mind', 'Body'] }) => {
    const rootRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!value) setValue(placeholder);
    }, []);
    const [open, setOpen] = useState<boolean>(false);

    const onElementClickHandler = (str: string) => {
        setValue(str);
    };

    const onRootClickHandler = () => {
        setOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const { target } = event;
            if (target instanceof Node && !rootRef.current?.contains(target)) {
                setOpen(false);
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className={`select ${className}`} onClick={() => onRootClickHandler()} ref={rootRef}>
            <div className='select__title__wr'>
                <p className='select__title'>{value}</p>
                <IconRenderer id='arrow_down' className={`arrow_down ${open ? ' active' : ''}`} />
            </div>
            <ul>
                {open &&
                    arr.map((el) => (
                        <li onClick={() => onElementClickHandler(el)} key={el} className='select__li'>
                            {el}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Select;
