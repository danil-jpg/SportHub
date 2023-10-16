import React, { FC, useEffect } from 'react';
import './UserChannel.scss';
import Banner from './Banner/Banner';
import Tabs from './Tabs/Tabs';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getUsers } from '../../../store/slices/users';

const UserChannel: FC = () => {
    const selectorUsers = useAppSelector((state) => state.usersSlice.data);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <div className='channel'>
            <Banner />
            <div className='tabs-wr'>
                <Tabs />
            </div>
        </div>
    );
};

export default UserChannel;
