import React, { FC } from 'react';
import IconRenderer from '../../ui/IconRenderer/IconRenderer';
import './Logo.scss';

const Logo: FC = () => {
    return (
        <div className='logo-wr'>
            <IconRenderer id='heart' className='heart' />
            <p className='logo_text'>sporthub</p>
        </div>
    );
};

export default Logo;
