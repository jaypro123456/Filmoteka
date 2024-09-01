import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFilms } from "../api/fetchFilms";
import Movie from "../components/Movie/Movie";
const MovieDetailsPage = () => {
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const type = `movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  useEffect(() => {
    fetchFilms(type).then(({ data }) => setMovie(data));
  }, []);

  return (
    <div>
      <Movie movie={movie} />
    </div>
  );
};

export default MovieDetailsPage;
