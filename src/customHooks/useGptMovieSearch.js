import { useDispatch } from "react-redux";
import openai from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constants";

export const useGptMovieSearch = (searchText) => {
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const response = await data.json();
        
        return response.results;
    }
    
    const handleGptSearchClick = async () => {
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + 
        searchText.current.value + 
        ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    
        const gptResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        });
    
        if(!gptResults.choices) {
          // Error handling
        }
    
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    
        const moviePromises = gptMovies.map(movie => searchMovieTMDB(movie));
        const tmdbMovieResults = await Promise.all(moviePromises);
        
        dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbMovieResults}));
    }

    return handleGptSearchClick;
}