import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { NETFLIX_BG } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
          <img 
            src={NETFLIX_BG}
            alt="netflix-background"
            className="h-screen object-cover md:h-full"
          />
      </div>
      <div>
        <div>
          <GptSearchBar />
          <GptMovieSuggestions />
        </div>
      </div>
    </>
  )
}

export default GptSearch;