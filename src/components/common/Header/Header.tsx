import React, { FC, useState, useEffect, useRef } from 'react';
import Logo from '../Logo/Logo';
import IconRenderer from '../../ui/IconRenderer/IconRenderer';
import Button from '../../ui/Button/Button';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
// import { doc, getDoc } from 'firebase/firestore';
// import { DB } from '../../../config/firebase-config';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setRegData } from '../../store/slices/registration';

const Header: FC = ({}) => {
    const [menuState, setMenuState] = useState<boolean>(false);
    const [profileState, setProfileState] = useState<boolean>(false);
    const [auth, setAuth] = useState<boolean>(false);

    const menuRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();

    const selector = useAppSelector((state) => state.regSlice.regData);
    const dispatch = useAppDispatch();

    const profileExitHandler = () => {
        dispatch(
            setRegData({
                email: '',
                password: '',
                videos: [],
            }),
        );
        navigate('../../registration/signIn');
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
                            }}
                            id='cross'
                        />
                    ) : (
                        <IconRenderer
                            onClick={() => {
                                setMenuState(!menuState);
                                setProfileState(false);
                            }}
                            id='burger'
                        />
                    )}
                    <div className={menuState ? 'header__menu header__menu_active' : 'header__menu'}>
                        <ul className='header__menu_ul'>
                            {auth ? (
                                <>
                                    <li className='header__menu_li'>video</li>
                                    <li className='header__menu_li'>store</li>
                                </>
                            ) : (
                                ''
                            )}
                            <li className='header__menu_li'>item1</li>
                            <li className='header__menu_li'>item2</li>
                        </ul>
                    </div>
                </div>
                <Logo isReg={false} />
            </div>
            <div className='header__right'>
                <IconRenderer id='search' />
                <IconRenderer id='ring' />
                {auth ? (
                    <div className='header__authed-block'>
                        <div className='header__video'>Video</div>
                        <div className='header__store'>Store</div>
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
