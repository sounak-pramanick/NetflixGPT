import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);


  return (
    <div className="bg-gradient-to-r from-[#181818] to-slate-950 text-white px-8">
      <div className="-mt-72 z-30 relative">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular on Netflix"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Animation Movies"} movies={movies.animationMovies} />
        <MovieList title={"Documentary Movies"} movies={movies.documentaryMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer;