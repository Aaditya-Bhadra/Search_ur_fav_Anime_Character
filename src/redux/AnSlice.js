import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const page = 15;
export const fetchAsyncAnime = createAsyncThunk('Anime/fetchAsyncAnime', async(text)=>{
    const response = await axios.get(`https://api.jikan.moe/v4/characters?page=1&limit=${page}${text}&order_by=favorites&sort=desc`)
            .catch((err)=>{
                console.log(`Error : ${err}`);
            })
            return response.data.data
        }
)

const initialState = {
    Animes : {}
};

const animeSlice = createSlice({
    name:'Anime',
    initialState,
    reducers:{
        addAnime:(state, {payload})=>{
            state.Animes = payload;
        },
    },
    extraReducers:{
        [fetchAsyncAnime.pending]:()=>{
            console.log('pending');
        },
        [fetchAsyncAnime.fulfilled]:(state, {payload})=>{
            console.log('fulfilled');
            return {...state, Animes: payload}
        },
        [fetchAsyncAnime.rejected]:()=>{
            console.log('rejected');
        },
    },
})

export const {addAnime} = animeSlice.actions;
export const AllAnimeData = (state)=> state.Anime.Animes;
export default animeSlice.reducer;