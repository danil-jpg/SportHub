import React, { FC, ReactNode, useEffect, useState } from 'react';
import Button from '../../../ui/Button/Button';
import IconRenderer from '../../../ui/IconRenderer/IconRenderer';
import DotBtn from '../../../common/DotBtn/DotBtn';
import './CreatePlaylist.scss';
import InputContainer from '../../../ui/Forms/InputContainer/InputContainer';
import SelectContainer from '../../../ui/Forms/SelectContainer/SelectContainer';
import Input from '../../../ui/Forms/Input/Input';
import { useAppSelector } from '../../../hooks/redux';
import { IVideo } from '../Home/CrHome';
import Video from '../Video/Video';
import getDate from '../../../utils/getDate';
import { v1 } from 'uuid';

const CreatePlaylist: FC = () => {
    const [selectState, setSelectState] = useState('');
    const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
    const [searchInput, setSearchInput] = useState('');

    const selector = useAppSelector((state) => state.regSlice.regData);
    const filteredVideos: IVideo[] | undefined = selector.videos;

    const filterVideosArrFunc = (): ReactNode[] | undefined => {
        const res = filteredVideos
            ?.filter((el) => el.title.toUpperCase().includes(searchInput.toUpperCase()))
            .map((el) => {
                return <Video key={v1()} className='video-active' title={el.title} preview={el.previewUrl} date={getDate(el.date)}></Video>;
            });

        return res;
    };

    useEffect(() => {
        console.log(filteredVideos);
    }, [selector]);

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
                    <Input placeholder='Search' value={searchInput} onChangeHandler={(e) => setSearchInput(e.target.value)} />

                    {filterVideosArrFunc()}
                </div>
            </div>
        </div>
    );
};

export default CreatePlaylist;
