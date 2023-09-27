import React from 'react'
import Header from './Header';
import { useNowPlayingMovies } from '../customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { usePopularMovies } from '../customHooks/usePopularMovies';
import { useTopRatedMovies } from '../customHooks/useTopRatedMovies';
import { useGenreMovies } from '../customHooks/useGenreMovies';


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useGenreMovies(16); // Animation Movies
  useGenreMovies(99); // Documentary

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse;