// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import { IPlaylist } from '../../pages/Creator/HomePlay/HomePlay';
// import { IShuffledVideo } from '../../pages/User/User';
// import { QueryDocumentSnapshot, QuerySnapshot, collection, doc, getDoc, getDocs } from 'firebase/firestore';
// import { DB } from '../../../config/firebase-config';
// import { v1 } from 'uuid';
// import { IVideo } from '../../pages/Creator/Home/CrHome';

// interface IGetVideo {
//     data: IVideo | null;
//     isLoading: boolean;
//     error: string | undefined;
// }

// const initialState: IGetVideo = {
//     data: null,
//     isLoading: false,
//     error: 'failed to load',
// };

// export const getVideo = createAsyncThunk('content/getVideo', async (videoId: string) => {
//     const converter = {
//         toFirestore: (data: IGetVideo) => data,
//         fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as IGetVideo,
//     };

//     const docRef = await doc(DB, 'videos', videoId).withConverter(converter);
//     const getVideo = await getDoc(docRef);
//     const video: IGetVideo | undefined = await getVideo.data();
//     return video;
// });
// export const videoSlice = createSlice({
//     name: 'videoSlice',
//     initialState,
//     reducers: {
//         setVideoData: (state, action: PayloadAction<any>) => {
//             state.data = { ...state.data, ...action.payload };
//         },
//     },
//     extraReducers: (builder) => {
//         builder.addCase(getVideo.pending, (state) => {
//             state.isLoading = true;
//         });
//         builder.addCase(getVideo.fulfilled, (state, action: PayloadAction<any>) => {
//             state.isLoading = false;
//             state.data = action.payload;
//         });
//         builder.addCase(getVideo.rejected, (state, action) => {
//             state.isLoading = false;
//             console.error(action.error.message);
//             state.error = action.error.message;
//         });
//     },
// });

// export default videoSlice.reducer;
// export const { setVideoData } = videoSlice.actions;
