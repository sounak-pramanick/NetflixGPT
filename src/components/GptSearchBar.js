import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import { useGptMovieSearch } from '../customHooks/useGptMovieSearch';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);

  const searchText = useRef(null);

  const handleGptSearchClick = useGptMovieSearch(searchText);

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form 
        className="w-full md:w-1/2 bg-black grid grid-cols-12 p-2 rounded-md"
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