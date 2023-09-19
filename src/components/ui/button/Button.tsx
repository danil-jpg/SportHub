import React, { FC, ReactNode } from 'react';
import './Button.scss';

interface IButton {
    className?: string;
    children?: string | ReactNode;
    onClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: string;
}

const Button: FC<IButton> = ({ className = '', type = 'def', children = 'default', onClickHandler }) => {
    return (
        <button onClick={onClickHandler} className={`${type === 'def' ? 'button_def' : 'button_unsubscribe'} ${className} button`}>
            {children}
        </button>
    );
};

export default Button;
