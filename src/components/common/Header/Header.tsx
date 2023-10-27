import React, { FC, useState, useEffect, useRef } from 'react';
import Logo from '../Logo/Logo';
import IconRenderer from '../../ui/IconRenderer/IconRenderer';
import Button from '../../ui/Button/Button';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setInitialUserState } from '../../store/slices/registration';

interface IHeader {
    mobChildren?: JSX.Element;
}

const Header: FC<IHeader> = ({ mobChildren }) => {
    const [menuState, setMenuState] = useState<boolean>(false);
    const [profileState, setProfileState] = useState<boolean>(false);
    const [auth, setAuth] = useState<boolean>(false);

    const menuRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();

    const selector = useAppSelector((state) => state.regSlice.regData);
    const dispatch = useAppDispatch();

    const profileExitHandler = () => {
        dispatch(setInitialUserState());
        navigate('../../');
    };

    const profileEditHandler = () => {
        navigate('../../creator/edit-profile');
    };

    useEffect(() => {
        selector.email ? setAuth(true) : '';
    }, [selector.email]);

    useEffect(() => {
        const onMenuOutMenuClickHandler = (e: MouseEvent) => {
            const { target } = e;
            if (target instanceof Node && !menuRef.current?.contains(target)) {
                setMenuState(false);
                document.body.style.overflow = 'auto';
            }
        };
        window.addEventListener('click', onMenuOutMenuClickHandler);

        return () => {
            window.removeEventListener('click', onMenuOutMenuClickHandler);
        };
    }, []);

    return (
        <div className={`header ${auth ? 'header__authed' : ''}`}>
            <div className='header__left'>
                <div ref={menuRef}>
                    {menuState ? (
                        <IconRenderer
                            onClick={() => {
                                setMenuState(!menuState);
                                document.body.style.overflow = 'auto';
                            }}
                            id='cross'
                        />
                    ) : (
                        <IconRenderer
                            onClick={() => {
                                setMenuState(!menuState);
                                setProfileState(false);
                                document.body.style.overflow = 'hidden';
                            }}
                            id='burger'
                        />
                    )}
                    <div className={menuState ? 'header__menu header__menu_active' : 'header__menu'}>
                        <ul className='header__menu_ul'>
                            {auth ? (
                                <>
                                    <li className='header__menu_li' onClick={() => navigate('../../creator/home')}>
                                        My videos
                                    </li>
                                    <li className='header__menu_li'>{mobChildren}</li>
                                </>
                            ) : (
                                ''
                            )}
                        </ul>
                    </div>
                </div>
                <Logo isReg={false} onClickHandler={() => navigate('../../user/home')} />
            </div>
            <div className='header__right'>
                {auth ? (
                    <div className='header__authed-block'>
                        <div className='header__video' onClick={() => navigate('../../creator/home')}>
                            Video
                        </div>
                        <div className='header__profile' onClick={() => setProfileState(!profileState)}>
                            <img className='header__profile_img' src={selector?.photoUrl} />
                            <p className='profile__text'>Profile</p>
                            {profileState ? (
                                <div className='profile__popup'>
                                    <div className='profile__edit' onClick={profileEditHandler}>
                                        <IconRenderer id='pencil' />
                                        <p className='profile__edit_text'>Edit profile</p>
                                    </div>
                                    <div className='profile__edit' onClick={profileExitHandler}>
                                        <IconRenderer id='exit' />
                                        <p className='profile__edit_text'>Log out</p>
                                    </div>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                ) : (
                    <Button className='header__button' onClickHandler={() => navigate('../registration/signIn')}>
                        Sign in
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Header;
