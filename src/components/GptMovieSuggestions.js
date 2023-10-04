import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector(store => store.gpt);
  
  if(!movieNames) return null;

  return (
    <div className="bg-black bg-opacity-80 text-white p-4 m-4 rounded-lg">
      {
        movieNames.map((movie, index) => <MovieList key={movie} title={movie} movies={movieResults[index]} />)
      }
    </div>
  )
}

export default GptMovieSuggestions;