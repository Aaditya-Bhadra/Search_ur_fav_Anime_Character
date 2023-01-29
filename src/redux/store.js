import { configureStore } from "@reduxjs/toolkit";
import AnimeReducer from '../redux/AnSlice'
export const store = configureStore({
    reducer:{
        Anime: AnimeReducer
    },
});