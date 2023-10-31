import React, { FC, SetStateAction, useState } from 'react';
import './UserComment.scss';
import TextareaContainer from '../../../../ui/Forms/TextareaContainer/TextareaContainer';
import Button from '../../../../ui/Button/Button';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { DB } from '../../../../../config/firebase-config';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { IComment } from '../../User';
import { setCurrentVideo } from '../../../../store/slices/creator';
import { v1 } from 'uuid';
import Comment from './Comment/Comment';

interface IUserComment {
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const UserComment: FC<IUserComment> = ({ isOpen, setIsOpen }) => {
    const [textAreaValue, setTextAreaValue] = useState<string>('');

    const currVideoDataSelector = useAppSelector((state) => state.creatorSlice.videoData.videoObj);
    const currUserSelector = useAppSelector((state) => state.regSlice.regData);

    const dispatch = useAppDispatch();

    const { id } = useParams();

    const onSendClickHandler = async () => {
        setTextAreaValue('');
        try {
            const docRef = doc(DB, 'videos', id ? id : '');

            const newComment: IComment = {
                authorPhotoUrl: `${currUserSelector.photoUrl ? currUserSelector.photoUrl : ''}`,
                authorName: `${currUserSelector.fname ? currUserSelector.fname : ''} ${currUserSelector.lname ? currUserSelector.lname : ''}`,
                comment: textAreaValue,
            };

            if (currVideoDataSelector?.comments?.length && currVideoDataSelector?.comments?.length > 0) {
                await updateDoc(docRef, {
                    comments: [...currVideoDataSelector?.comments, newComment],
                });

                dispatch(
                    setCurrentVideo({
                        videoObj: { ...currVideoDataSelector, comments: [...currVideoDataSelector?.comments, newComment] },
                    }),
                );
            } else {
                await updateDoc(docRef, {
                    comments: [newComment],
                });

                dispatch(
                    setCurrentVideo({
                        videoObj: { ...currVideoDataSelector, comments: [newComment] },
                    }),
                );
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className={`${isOpen ? 'active' : ''} comment`}>
            <p className='comment__count'>{`${currVideoDataSelector?.comments?.length ? currVideoDataSelector?.comments?.length : 0} Comments`}</p>
            <div className='comment__add'>
                <TextareaContainer value={textAreaValue} onChangeHandler={(e) => setTextAreaValue(e.target.value)} placeholder='Enter your comment' text='' />
                <Button className='comment__btn' onClickHandler={onSendClickHandler}>
                    Send
                </Button>
            </div>
            <div className='comment__comments'>
                {currVideoDataSelector?.comments?.map((el) => (
                    <Comment key={v1()} authorPhotoUrl={el.authorPhotoUrl} authorName={el.authorName} comment={el.comment} />
                ))}
            </div>
        </div>
    );
};

export default UserComment;
