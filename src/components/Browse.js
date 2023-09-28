import React from 'react'
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useNowPlayingMovies } from '../customHooks/useNowPlayingMovies';
import { usePopularMovies } from '../customHooks/usePopularMovies';
import { useTopRatedMovies } from '../customHooks/useTopRatedMovies';
import { useGenreMovies } from '../customHooks/useGenreMovies';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useGenreMovies(16); // Animation Movies
  useGenreMovies(99); // Documentary Movies
  

  return (
    <div>
      <Header />
      {
        showGptSearch ? 
          <GptSearch /> : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }
    </div>
  )
}

export default Browse;