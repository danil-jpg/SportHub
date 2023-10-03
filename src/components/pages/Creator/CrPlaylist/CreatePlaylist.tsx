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
import { IVideoComp } from '../Video/Video';
import Video from '../Video/Video';
import getDate from '../../../utils/getDate';
import { v1 } from 'uuid';

const CreatePlaylist: FC = () => {
    const [selectState, setSelectState] = useState('');
    const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
    const [searchInput, setSearchInput] = useState('');

    const [selectedArr, setSelectedArr] = useState<IVideo[] | []>([]);

    const selector = useAppSelector((state) => state.regSlice.regData);
    const filteredVideos: IVideo[] | undefined = selector.videos;

    const [selectedArrState, setSelectedArrState] = useState<boolean[]>(Array(filteredVideos?.length).fill(false));

    useEffect(() => {
        setSelectedArrState(Array(filteredVideos?.length).fill(false));
    }, [filteredVideos]);

    const filterVideosArrFunc = (): ReactNode[] | undefined => {
        const res = filteredVideos
            ?.filter((el) => el.title.toUpperCase().includes(searchInput.toUpperCase()))
            .map((el, index) => {
                return (
                    <div
                        key={v1()}
                        onClick={(e) => {
                            setSelectedArrState((prev) => {
                                const res = [...prev];
                                res[index] = !res[index];

                                return res;
                            });
                            setSelectedArr((prev) => {
                                const res = [...prev];
                                let status: boolean = true;

                                for (let i = 0; i < res.length; ++i) {
                                    console.log(el.date, res[i].date);
                                    status = !(el.date === res[i].date);
                                }

                                if (status) {
                                    res.push(el);
                                } else {
                                    console.log(2);
                                    res.splice(index, 1);
                                }
                                return res;
                            });
                        }}
                    >
                        <Video className={`${selectedArrState[index] ? 'video-active' : ''}`} previewUrl={el.previewUrl} title={el.title} date={getDate(el.date)}></Video>
                    </div>
                );
            });

        return res;
    };

    useEffect(() => {}, []);

    return (
        <div className='cr-playlist'>
            <div className='cr-playlist__top'>
                <p className='cr-playlist__title'>Create new playlist</p>
                <div className='cr-playlist__top-right'>
                    <Button className='cr-playlist__top_btn' onClickHandler={() => console.log(selectedArr)}>
                        Save
                    </Button>
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
