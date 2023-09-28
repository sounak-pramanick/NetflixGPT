import React from 'react'
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 p-2 rounded-md">
        <input 
          className="col-span-9 p-2 rounded-sm outline-none mx-2"
          type="text" 
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 bg-[#e50914] text-white p-2 rounded-sm mx-2"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;