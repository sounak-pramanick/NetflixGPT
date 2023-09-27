import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        animationMovies: null,
        documentaryMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addAnimationMovies: (state, action) => {
            state.animationMovies = action.payload;
        },
        addDocumentaryMovies: (state, action) => {
            state.documentaryMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
});


export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addAnimationMovies, addDocumentaryMovies, addTrailerVideo } = moviesSlice.actions;


export default moviesSlice.reducer;