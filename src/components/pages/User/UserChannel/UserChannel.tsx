import React, { FC, useEffect } from 'react';
import './UserChannel.scss';
import Banner from './Banner/Banner';
import Tabs from './Tabs/Tabs';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getUsers } from '../../../store/slices/users';
import { Route, Routes } from 'react-router-dom';

const UserChannel: FC = () => {
    const selectorUsers = useAppSelector((state) => state.usersSlice.data);
    const selectorCreatorEmail = useAppSelector((state) => state.creatorSlice.creatorEmail.email);
    const currentCreator = selectorUsers.filter((el) => el.email === selectorCreatorEmail)[0].email;
    const dispatch = useAppDispatch();
    const currentUserEmailFormatted = currentCreator.replace(/\./g, '');

    const UserChannelJsx = (): JSX.Element => {
        return (
            <Routes>
                <Route
                    path={`${currentUserEmailFormatted}`}
                    element={
                        <div className='channel'>
                            <Banner />
                            <div className='tabs-wr'>
                                <Tabs />
                            </div>
                        </div>
                    }
                />
            </Routes>
        );
    };

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    useEffect(() => {}, [currentUserEmailFormatted]);

    return <UserChannelJsx />;
};

export default UserChannel;
