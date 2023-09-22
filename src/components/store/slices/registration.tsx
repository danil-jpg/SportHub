import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IReg {
    regData: {
        fname: string;
        lname: string;
        email: string;
        password: string;
        file?: File;
    };
}

const initialState: IReg = {
    regData: {
        fname: '',
        lname: '',
        email: '',
        password: '',
    },
};

export const regSlice = createSlice({
    name: 'regSlice',
    initialState,
    reducers: {
        setRegData: (state, action: PayloadAction<any>) => {
            state.regData = { ...state.regData, ...action.payload };
        },
    },
});

export default regSlice.reducer;
export const { setRegData } = regSlice.actions;
