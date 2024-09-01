import AddToFavorites from "../AddToFavorites/AddToFavorites";
import styles from "./Movie.module.css";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const genreElem =
    movie.genres && movie.genres.length > 0 ? (
      movie.genres.map((genre) => {
        return (
          <span key={genre.id} className={styles.genre}>
            {genre.name}
          </span>
        );
      })
    ) : (
      <p>Жанры не указаны</p>
    );

  return (
    <div className={styles.mainContainer}>
      <img
        className={styles.img}
        src={`https://image.tmdb.org/t/p/w500${
          movie.poster_path || movie.backdrop_path
        }`}
        alt="img"
      />
      <div className={styles.mainInfo}>
        <Link to={"/"}>
          <button className={styles.toMain}>На главную</button>
        </Link>
        <h3 className={styles.movieName}>
          {movie.original_title || movie.title}
        </h3>
        <p className={styles.overViev}>{movie.overview}</p>
        <p className={styles.tags}>Теги: {movie.tagline}</p>
        <p className={styles.genres}>Жанры: {genreElem}</p>
        <bold className={styles.vote}>Оценки: {movie.vote_count}</bold>

        <AddToFavorites movie={movie} />
      </div>
    </div>
  );
};

export default Movie;
