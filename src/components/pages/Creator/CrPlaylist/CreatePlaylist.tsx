import React, { FC, useState } from 'react';
import Button from '../../../ui/Button/Button';
import IconRenderer from '../../../ui/IconRenderer/IconRenderer';
import DotBtn from '../../../common/DotBtn/DotBtn';
import './CreatePlaylist.scss';
import InputContainer from '../../../ui/Forms/InputContainer/InputContainer';
import SelectContainer from '../../../ui/Forms/SelectContainer/SelectContainer';
import Input from '../../../ui/Forms/Input/Input';

const CreatePlaylist: FC = () => {
    const [selectState, setSelectState] = useState('');
    const [burgerMenu, setBurgerMenu] = useState<boolean>(false);

    return (
        <div className='cr-playlist'>
            <div className='cr-playlist__top'>
                <p className='cr-playlist__title'>Create new playlist</p>
                <div className='cr-playlist__top-right'>
                    <Button className='cr-playlist__top_btn'>Save</Button>
                    <DotBtn />
                </div>
            </div>
            <div className='cr-playlist__center'>
                <div>
                    <InputContainer text='Playlist name' placeholder='Enter playlist name'></InputContainer>
                    <InputContainer text='Description' placeholder='Description'></InputContainer>
                    <SelectContainer setValue={setSelectState} value={selectState} title='Category' placeholder='Select category' arr={['Mind', 'Body', 'Soul']}></SelectContainer>
                    <Button className='cr-playlist__center_select-videos' onClickHandler={() => setBurgerMenu(true)}>
                        Select video
                    </Button>
                </div>
                <div className={`cr-playlist__center__right  ${burgerMenu ? 'active' : ''} `}>
                    <div className='cr-playlist__center__right_selected'>
                        <p className='cr-playlist_selected-text'>Selected: {3}</p>
                        <IconRenderer id='cross' onClick={() => setBurgerMenu(false)} />
                    </div>
                    <Input placeholder='Search' />
                </div>
            </div>
        </div>
    );
};

export default CreatePlaylist;
