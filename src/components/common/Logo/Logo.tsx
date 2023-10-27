import React, { FC } from 'react';
import IconRenderer from '../../ui/IconRenderer/IconRenderer';
import './Logo.scss';

interface ILogo {
    isReg: boolean;
    onClickHandler?: () => void;
}

const Logo: FC<ILogo> = ({ isReg = false, onClickHandler }) => {
    return (
        <div className='logo-wr' onClick={onClickHandler}>
            <IconRenderer id='heart' className='heart' />
            <p className={`${isReg ? 'logo_text_reg logo_text' : 'logo_text'}`}>sporthub</p>
        </div>
    );
};

export default Logo;
