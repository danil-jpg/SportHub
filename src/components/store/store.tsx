import { configureStore } from '@reduxjs/toolkit';
import regSlice from './slices/registration';

export const store = configureStore({
    reducer: {
        regSlice: regSlice,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
