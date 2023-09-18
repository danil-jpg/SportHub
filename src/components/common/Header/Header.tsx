import React, { FC, useState } from 'react';
import Logo from '../Logo/Logo';
import IconRenderer from '../../ui/IconRenderer/IconRenderer';
import Button from '../../ui/Button/Button';
import './Header.scss';

interface IHeader {
    state: string;
}

const Header: FC<IHeader> = ({ state }) => {
    const [menuState, setMenuState] = useState<boolean>(false);

    return (
        <div className='header'>
            <div className='header__left'>
                <div onClick={() => setMenuState(!menuState)}>{menuState ? <IconRenderer id='cross' /> : <IconRenderer id='burger' />}</div>
                <Logo isReg={false} />
            </div>
            <div className='header__right'>
                <IconRenderer id='search' />
                <IconRenderer id='ring' />
                <Button className='header__button'>Sign in</Button>
            </div>
            <div className={menuState ? 'header__menu header__menu_active' : 'header__menu'}>
                <ul className='header__menu_ul'>
                    <li className='header__menu_li'>item1</li>
                    <li className='header__menu_li'>item2</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
