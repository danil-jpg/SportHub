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
import TextareaContainer from '../../../ui/Forms/TextareaContainer/TextareaContainer';
import swal from 'sweetalert';
import { updateDoc, getDoc } from 'firebase/firestore';
import { DB } from '../../../../config/firebase-config';
import { doc } from 'firebase/firestore';

const CreatePlaylist: FC = () => {
    const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
    const [searchInput, setSearchInput] = useState('');

    const [selectState, setSelectState] = useState('');
    const [titleInput, setTitleInput] = useState<string>('');
    const [textAreaInput, setTextAreaInput] = useState<string>('');

    const [saveBtnState, setSaveBtnState] = useState<boolean>(false);

    const selector = useAppSelector((state) => state.regSlice.regData);
    const filteredVideos: IVideo[] | undefined = selector.videos;
    const [selectedArrState, setSelectedArrState] = useState<[boolean[], IVideo[] | any]>([Array(filteredVideos?.length).fill(false), Array(filteredVideos?.length).fill({})]);

    const countNumberOfVideos = (): number => {
        let num = 0;
        for (let i = 0; i < selectedArrState[0].length; i++) {
            if (selectedArrState[0][i]) {
                num++;
            }
        }
        return num;
    };

    const numOfVideos = countNumberOfVideos();

    const filterVideosArrFunc = (): ReactNode[] | undefined => {
        const res = filteredVideos
            ?.filter((el) => el.title.toUpperCase().includes(searchInput.toUpperCase()))
            .map((el, index) => {
                return (
                    <div
                        key={v1()}
                        onClick={(e) => {
                            setSelectedArrState((prev) => {
                                const res = [...prev[0]];
                                res[index] = !res[index];
                                //
                                const vidoesArr = [...prev[1]];
                                if (res[index]) {
                                    vidoesArr[index] = el;
                                } else {
                                    vidoesArr[index] = [];
                                }
                                return [res, vidoesArr];
                            });
                        }}
                    >
                        <Video className={`${selectedArrState[0][index] ? 'video-active' : ''}`} previewUrl={el.previewUrl} title={el.title} date={getDate(el.date)}></Video>
                    </div>
                );
            });

        return res;
    };

    const checkIfVideoHadChoosen = (): ReactNode | '' => {
        let status = false;
        for (let i = 0; i < selectedArrState[0].length; i++) {
            if (selectedArrState[0][i] === true) {
                status = true;
                break;
            }
        }
        return status ? (
            <>
                <p className='cr-playlist__selected'>Selected</p>{' '}
                <ul className='cr-playlist__chosen-ul'>
                    {selectedArrState[1].map((el, index) =>
                        el.title ? (
                            <li key={v1()} className='cr-playlist__chosen-li'>
                                {el.title}
                                <IconRenderer
                                    id='small-cross'
                                    onClick={() =>
                                        setSelectedArrState((prev) => {
                                            const res = [...prev[0]];
                                            res[index] = !res[index];
                                            //
                                            const vidoesArr = [...prev[1]];
                                            if (res[index]) {
                                                vidoesArr[index] = el;
                                            } else {
                                                vidoesArr[index] = [];
                                            }
                                            return [res, vidoesArr];
                                        })
                                    }
                                />
                            </li>
                        ) : (
                            ''
                        ),
                    )}
                </ul>
            </>
        ) : (
            ''
        );
    };

    const onSaveClick = async () => {
        if (selectState && selectState !== 'Select category' && titleInput && textAreaInput && countNumberOfVideos() > 1) {
            const oldData = await getDoc(doc(DB, 'users', selector.email)).then((res) => res.data()?.playlists);

            if (oldData) {
                await updateDoc(doc(DB, 'users', selector.email), {
                    playlists: [
                        ...oldData,
                        {
                            title: titleInput,
                            description: textAreaInput,
                            type: selectState,
                            videos: selectedArrState[1].filter((el: IVideo) => el.title),
                        },
                    ],
                }).then((res) => swal('Successfully added'));
            } else {
                await updateDoc(doc(DB, 'users', selector.email), {
                    playlists: [
                        {
                            title: titleInput,
                            description: textAreaInput,
                            type: selectState,
                            videos: selectedArrState[1].filter((el: IVideo) => el.title),
                        },
                    ],
                }).then(() => swal('Successfully added'));
            }
        } else {
            swal('Fill out all fields and select at least two video');
        }
    };

    useEffect(() => {
        setSelectedArrState([Array(filteredVideos?.length).fill(false), Array(filteredVideos?.length).fill({})]);
    }, [filteredVideos]);

    useEffect(() => {
        if (selectState && selectState !== 'Select category' && titleInput && textAreaInput && numOfVideos > 1) {
            setSaveBtnState(true);
        } else {
            setSaveBtnState(false);
        }
    }, [selectState, titleInput, textAreaInput, numOfVideos]);

    return (
        <div className='cr-playlist'>
            <div className='cr-playlist__top'>
                <p className='cr-playlist__title'>Create new playlist</p>
                <div className='cr-playlist__top-right'>
                    <Button className={`${saveBtnState ? 'active' : ''} cr-playlist__top_btn`} onClickHandler={() => onSaveClick()}>
                        Save
                    </Button>
                    <DotBtn />
                </div>
            </div>
            <div className='cr-playlist__center'>
                <div>
                    <InputContainer
                        text='Playlist name'
                        placeholder='Enter playlist name'
                        value={titleInput}
                        onChangeHandler={(e) => setTitleInput(e.target.value)}
                    ></InputContainer>
                    <TextareaContainer
                        value={textAreaInput}
                        onChangeHandler={(e) => setTextAreaInput(e.target.value)}
                        text='Description'
                        placeholder='Description'
                    ></TextareaContainer>
                    <SelectContainer setValue={setSelectState} value={selectState} title='Category' placeholder='Select category' arr={['Mind', 'Body', 'Soul']}></SelectContainer>
                    {checkIfVideoHadChoosen()}

                    <Button className='cr-playlist__center_select-videos' onClickHandler={() => setBurgerMenu(true)}>
                        Select video
                    </Button>
                </div>
                <div className={`cr-playlist__center__right  ${burgerMenu ? 'active' : ''} `}>
                    <div className='cr-playlist__center__right_selected'>
                        <p className='cr-playlist_selected-text'>
                            Selected:
                            {countNumberOfVideos()}
                        </p>
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
