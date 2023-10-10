import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IVideo } from '../../pages/Creator/Home/CrHome';
import { IPlaylist } from '../../pages/Creator/HomePlay/HomePlay';

interface IReg {
    regData: {
        fname: string;
        lname: string;
        email: string;
        password: string;
        file?: string;
        type?: string;
        photoUrl?: string;
        birthday?: string | number;
        gender?: string;
        videos?: IVideo[];
        playlists?: IPlaylist[];
        date?: string;
        bio?: string;
        vimeo?: string;
        inst?: string;
        twitter?: string;
        facebook?: string;
        shopify: string;
    };
}

const initialState: IReg = {
    regData: {
        fname: '',
        lname: '',
        email: '',
        password: '',
        file: '',
        type: '',
        photoUrl: '',
        date: '',
        videos: [],
        playlists: [],
        twitter: '',
        facebook: '',
        shopify: '',
        inst: '',
        vimeo: '',
        bio: '',
        birthday: '',
        gender: '',
    },
};

export const regSlice = createSlice({
    name: 'regSlice',
    initialState,
    reducers: {
        setRegData: (state, action: PayloadAction<any>) => {
            state.regData = { ...state.regData, ...action.payload };
        },
        setInitialUserState: () => {
            return initialState;
        },
    },
});

export default regSlice.reducer;
export const { setRegData, setInitialUserState } = regSlice.actions;
