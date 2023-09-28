import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

  // fetch trailer videos & store it in redux store
  const getMovieVideos = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const response = await data.json();
    // console.log(response);

    const filterData = response.results.filter(video => video.type === 'Trailer');
    const trailer = filterData.length ? filterData[0] : response.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useMovieTrailer;