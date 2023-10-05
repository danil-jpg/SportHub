import React from 'react';
import './EditProfile.scss';
import AddPhoto from '../../../common/AddPhoto/AddPhoto';
import Button from '../../../ui/Button/Button';
import InputContainer from '../../../ui/Forms/InputContainer/InputContainer';
import InputRadio from '../../../ui/Forms/InputRadio/InputRadio';

const EditProfile = () => {
    return (
        <div className='profile-edit'>
            <div className='profile__top'>
                <p className='profile__top_title'>Edit profile</p>
                <Button className='profile__top_btn'>Save</Button>
            </div>
            <div className='profile__img__wr'>
                <AddPhoto />
                <AddPhoto />
            </div>
            <div className='profile__inputs'>
                <InputContainer text='First Name' placeholder='Your First Name'></InputContainer>
                <div className='profile__gender'>
                    <p className='profile__gender-text'>Gender</p>
                    <div className='profile__radio'>
                        <InputRadio text='Male' />
                        <InputRadio text='Female' />
                        <InputRadio text='None' />
                    </div>
                </div>
                <InputContainer text='Last Name' placeholder='Your Last Name'></InputContainer>
                <InputContainer text='Date of birthday' placeholder='MM.DD.YYYY'></InputContainer>
                <InputContainer text='Address' placeholder='Your Address'></InputContainer>
                <InputContainer text='Shopify Link' placeholder='Shopify Link'></InputContainer>
                <div className='profile__inputs_descr'>
                    <InputContainer text='Description' placeholder='Description'></InputContainer>
                </div>
                <InputContainer text='Vimeo account' placeholder='Add your Vimeo account'></InputContainer>
                <InputContainer text='Instagram account' placeholder='Add your Instagram account'></InputContainer>
                <InputContainer text='Facebook  account' placeholder='Add your Facebook account'></InputContainer>
                <InputContainer text='Twitter account' placeholder='Add your Twitter account'></InputContainer>
            </div>
        </div>
    );
};

export default EditProfile;
