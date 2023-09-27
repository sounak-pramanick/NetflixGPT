import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 m-2 cursor-pointer">
      <img 
        src={IMG_CDN_URL+posterPath}
        alt="Movie Card" 
      />
    </div>
  )
}

export default MovieCard;