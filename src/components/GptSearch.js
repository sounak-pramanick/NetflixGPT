import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { NETFLIX_BG } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className="absolute w-screen h-screen -z-10">
          <img 
            src={NETFLIX_BG}
            alt="netflix-background"
            className="w-full h-full bg-cover"
          />
        </div>
        <div>
          <GptSearchBar />
          <GptMovieSuggestions />
        </div>
    </div>
  )
}

export default GptSearch;