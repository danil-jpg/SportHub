import React, { FC, SetStateAction } from 'react';
import './UserComment.scss';
import TextareaContainer from '../../../../ui/Forms/TextareaContainer/TextareaContainer';
import Button from '../../../../ui/Button/Button';

interface IUserComment {
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const UserComment: FC<IUserComment> = ({ isOpen, setIsOpen }) => {
    return (
        <div className={`${isOpen ? 'active' : ''} comment`}>
            <p className='comment__count'>{`${0} Comments`}</p>
            <div className='comment__add'>
                <TextareaContainer placeholder='Enter your comment' text='' />
                <Button className='comment__btn'>Send</Button>
            </div>
            <div className='comment__comments'>
                <div className='comment__item'>
                    <div className='comment__item_top'>
                        <img className='comment__item__avatar' />
                        <p className='comment__item__name'>SomeName</p>
                    </div>
                    <p className='comment__comment'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis rerum illum doloremque ducimus quia doloribus, in quibusdam iusto exercitationem tenetur
                        expedita quasi magni pariatur sint praesentium nemo, deleniti reprehenderit accusamus!
                    </p>
                </div>
                <div className='comment__item'>
                    <div className='comment__item_top'>
                        <img className='comment__item__avatar' />
                        <p className='comment__item__name'>SomeName</p>
                    </div>
                    <p className='comment__comment'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis rerum illum doloremque ducimus quia doloribus, in quibusdam iusto exercitationem tenetur
                        expedita quasi magni pariatur sint praesentium nemo, deleniti reprehenderit accusamus!
                    </p>
                </div>
                <div className='comment__item'>
                    <div className='comment__item_top'>
                        <img className='comment__item__avatar' />
                        <p className='comment__item__name'>SomeName</p>
                    </div>
                    <p className='comment__comment'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis rerum illum doloremque ducimus quia doloribus, in quibusdam iusto exercitationem tenetur
                        expedita quasi magni pariatur sint praesentium nemo, deleniti reprehenderit accusamus!
                    </p>
                </div>
                <div className='comment__item'>
                    <div className='comment__item_top'>
                        <img className='comment__item__avatar' />
                        <p className='comment__item__name'>SomeName</p>
                    </div>
                    <p className='comment__comment'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis rerum illum doloremque ducimus quia doloribus, in quibusdam iusto exercitationem tenetur
                        expedita quasi magni pariatur sint praesentium nemo, deleniti reprehenderit accusamus!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserComment;
