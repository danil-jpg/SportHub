import React, { FC } from 'react';
import './UserItem.scss';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setCreatorEmail } from '../../../store/slices/creator';

interface IUserItem {
    name: string;
    imgUrl: string;
    email: string;
}

const UserItem: FC<IUserItem> = ({ email, name, imgUrl }) => {
    // const use
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const selectorCreatorEmail = useAppSelector((state) => state.creatorSlice.creatorEmail.email);
    const currentUserEmailFormatted = email.replace(/\./g, '');

    const onUserClickHandler = () => {
        dispatch(setCreatorEmail({ email }));
        navigate(`./channel/${currentUserEmailFormatted}`);
    };

    return (
        <div className={`user-item ${selectorCreatorEmail === email ? 'active' : ''}`} onClick={() => onUserClickHandler()}>
            <img className='user-item__img' src={imgUrl} />
            <p className='user-item__name'>{name}</p>
        </div>
    );
};

export default UserItem;
