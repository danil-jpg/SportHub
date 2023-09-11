import React, { useState, useRef, useEffect, FC } from 'react';
import IconRenderer from '../../IconRenderer/IconRenderer';

const Select: FC = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const rootRef = useRef<HTMLDivElement | null>(null);

    const [value, setValue] = useState<string | number>();
    const [open, setOpen] = useState<boolean>(true);

    const onElementClick = (str: string | number) => {
        setValue(str);
    };

    const onButtonClick = () => {
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

        return () => window.removeEventListener('click', handleClick);
    }, []);

    return (
        <div onClick={() => onButtonClick()} ref={rootRef}>
            <p>{value}</p>
            {open &&
                arr.map((el) => (
                    <li onClick={(e) => onElementClick(el)} key={el}>
                        {el}
                    </li>
                ))}
        </div>
    );
};

export default Select;
