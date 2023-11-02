import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IVideo } from '../../pages/Creator/Home/CrHome';
import { IPlaylist } from '../../pages/Creator/HomePlay/HomePlay';
import { IShuffledVideo } from '../../pages/User/User';

interface ICreator {
    creatorEmail: {
        email: string;
    };
    videoData: {
        videoObj: IShuffledVideo | null;
    };
}

const initialState: ICreator = {
    creatorEmail: {
        email: '',
    },
    videoData: {
        videoObj: null,
    },
};

export const creatorSlice = createSlice({
    name: 'creatorSlice',
    initialState,
    reducers: {
        setCreatorEmail: (state, action: PayloadAction<any>) => {
            state.creatorEmail = action.payload;
        },
        setFormattedCreatorEmail: (state, action: PayloadAction<any>) => {
            state.creatorEmail = action.payload;
        },
        setCurrentVideo: (state, action: PayloadAction<any>) => {
            state.videoData = action.payload;
        },
    },
});

export default creatorSlice.reducer;
export const { setCreatorEmail, setFormattedCreatorEmail, setCurrentVideo } = creatorSlice.actions;
export type { ICreator };
