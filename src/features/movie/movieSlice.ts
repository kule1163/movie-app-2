import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { ListProps, MovieType } from '../../utils/types';

export interface CounterState {
    searchToggle: boolean;
    topMenuToggle: boolean;
    genre: string | number | undefined;
    filterButton: string;
    sortBy: string;
    searchValue: string;
    count: number;
    shareButtonToggle: string;
}
  
const initialState: CounterState = {
    searchToggle: false,
    topMenuToggle: false,
    genre: "all",
    filterButton: "Popular",
    sortBy: "o",
    searchValue: "",
    count: 0,
    shareButtonToggle: "false"
};

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setSearchToggle: (state, action:PayloadAction<boolean>) => {
            state.searchToggle = action.payload
        },
        setTopMenuToggle: (state, action:PayloadAction<boolean>) => {
            state.topMenuToggle = action.payload
        },
        setGenre: (state, action:PayloadAction<string | number | undefined>) => {
            state.genre = action.payload
        },
        setFilterButton: (state, action:PayloadAction<string>) => {
            state.filterButton = action.payload
        },
        setSortBy: (state, action:PayloadAction<string>) => {
            state.sortBy = action.payload
        },
        setSearchValue: (state, action:PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setCount: (state, action:PayloadAction<number>) => {
            state.count = action.payload
        },
        setShareButtonToggle: (state, action:PayloadAction<string>) => {
            state.shareButtonToggle = action.payload
        }
       
    }
})

export const {setSearchToggle, setTopMenuToggle, setGenre, setFilterButton, setSortBy, setSearchValue, setCount, setShareButtonToggle } = movieSlice.actions

export default movieSlice.reducer