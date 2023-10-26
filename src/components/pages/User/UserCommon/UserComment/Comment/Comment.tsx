import React, { FC } from 'react';
import { IComment } from '../../../User';

const Comment: FC<IComment> = ({ authorPhotoUrl, authorName, comment }) => {
    return (
        <div className='comment__item'>
            <div className='comment__item_top'>
                <img className='comment__item__avatar' src={authorPhotoUrl} />
                <p className='comment__item__name'>{authorName}</p>
            </div>
            <p className='comment__comment'>{comment}</p>
        </div>
    );
};

export default Comment;
