import React, { FC } from 'react';
import './Button.scss';

interface IButton {
    className?: string;
    children?: string;
    onClick?: () => void;
    type?: string;
}

const Button: FC<IButton> = ({ className = '', type = 'def', children = 'default', onClick }) => {
    return (
        <button onClick={onClick} className={`${type === 'def' ? 'button_def' : 'button_unsubscribe'} ${className} button`}>
            {children}
        </button>
    );
};

export default Button;
