import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;

  return (
    <div className="w-36 md:w-40 m-2 cursor-pointer">
      <img 
        className="rounded-md"
        src={IMG_CDN_URL+posterPath}
        alt="Movie Card" 
      />
    </div>
  )
}

export default MovieCard;