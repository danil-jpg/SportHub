import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IVideo } from '../../pages/Creator/Home/CrHome';
import { IPlaylist } from '../../pages/Creator/HomePlay/HomePlay';
import { IShuffledVideo } from '../../pages/User/User';

interface ICreator {
    creatorEmail: {
        email: string;
    };
}

const initialState: ICreator = {
    creatorEmail: {
        email: '',
    },
};

export const creatorSlice = createSlice({
    name: 'creatorSlice',
    initialState,
    reducers: {
        setCreatorEmail: (state, action: PayloadAction<any>) => {
            state.creatorEmail = action.payload;
        },
    },
});

export default creatorSlice.reducer;
export const { setCreatorEmail } = creatorSlice.actions;
export type { ICreator };
