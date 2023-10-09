import React, { FC } from 'react';
import './UserItem.scss';

interface IUserItem {
    name: string;
    imgUrl: string;
    linkToUser: string;
}

const UserItem: FC<IUserItem> = ({ name, imgUrl, linkToUser }) => {
    const onUserClickHandler = () => {};

    return (
        <div className='user-item' onClick={() => onUserClickHandler()}>
            <img src={imgUrl} className='user-item__img' />
            <p className='user-item__name'>{name}</p>
        </div>
    );
};

export default UserItem;
