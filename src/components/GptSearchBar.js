import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const langKey = useSelector(store => store.config.lang);

  const searchText = useRef(null);

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

  return (
    <div className="pt-[10%] flex justify-center">
      <form 
        className="w-1/2 bg-black grid grid-cols-12 p-2 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input 
          className="col-span-9 p-2 rounded-sm outline-none mx-2"
          type="text" 
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          className="col-span-3 bg-[#e50914] text-white p-2 rounded-sm mx-2"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;