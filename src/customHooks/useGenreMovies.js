import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addAnimationMovies, addDocumentaryMovies } from "../utils/moviesSlice";

export const useGenreMovies = (id) => {
    const dispatch = useDispatch();

    const getGenreMovies = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`, API_OPTIONS);
        const response = await data.json();
        // console.log(response.results);
        if(id === 16) {
            dispatch(addAnimationMovies(response.results));
        }
        else {
            dispatch(addDocumentaryMovies(response.results));
        }
    }

    useEffect(() => {
        getGenreMovies();
    }, []);
}