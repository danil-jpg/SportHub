import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IVideo } from '../../pages/Creator/Home/CrHome';
import { IPlaylist } from '../../pages/Creator/HomePlay/HomePlay';
import { IShuffledVideo } from '../../pages/User/User';
import { QueryDocumentSnapshot, QuerySnapshot, collection, getDocs } from 'firebase/firestore';
import { DB } from '../../../config/firebase-config';
import { v1 } from 'uuid';

interface IUser {
    data: {
        fname?: string;
        lname?: string;
        email: string;
        password: string;
        file?: string;
        type?: string;
        photoUrl?: string;
        birthday?: string | number;
        gender?: string;
        videos?: IVideo[];
        videosIds?: string[];
        viewLater?: IShuffledVideo[];
        playlists?: IPlaylist[];
        date?: string;
        bio?: string;
        vimeo?: string;
        inst?: string;
        twitter?: string;
        facebook?: string;
        shopify: string;
        coverPhotoUrl: string;
        subscriptions?: string[];
        subscribers?: string[];
    }[];
    isLoading?: boolean;
    error?: string;
}

const initialState: IUser = {
    data: [
        {
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
            coverPhotoUrl: '',
            subscriptions: [],
            subscribers: [],
        },
    ],
    isLoading: false,
    error: 'failed to load',
};

export const getUsers = createAsyncThunk('content/getUsers', async () => {
    const converter = {
        toFirestore: (data: IUser) => data,
        fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as IUser,
    };

    const docRef = await collection(DB, 'users').withConverter(converter);
    const getUsers = await getDocs(docRef);
    const users: IUser[] = await getUsers.docs.map((el) => ({ ...el.data(), id: v1() }));
    return users;
});
export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        setUsersData: (state, action: PayloadAction<any>) => {
            state.data = { ...state.data, ...action.payload };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    },
});

export default usersSlice.reducer;
export const { setUsersData } = usersSlice.actions;
