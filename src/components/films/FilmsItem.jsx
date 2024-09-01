import { Link } from "react-router-dom";
import { MdOutlineImageNotSupported } from "react-icons/md";
import styles from "./Films.module.css";

const FilmsItem = ({
  backdrop_path,
  title,
  id,
  name,
  original_title,
  poster_path,
  popularity,
  vote_average,
  release_date,
  first_air_date,
}) => {
  const imageUrl =
    poster_path || backdrop_path
      ? `https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`
      : null;
  return (
    <li className="film-list">
      <Link to={`/movie/${id}`}>
        {imageUrl ? (
          <img className={styles.img} src={imageUrl} alt="Movie Poster" />
        ) : (
          <div className={styles.noImage}>
            <MdOutlineImageNotSupported size={50} />
            <p>No Image Available</p>
          </div>
        )}
        <p className="film-item-title">{original_title || title || name}</p>
        <div className="hidden-info">
          <b className="vote">{vote_average}</b>

          <p className="date">{release_date || first_air_date}</p>
        </div>
      </Link>
    </li>
  );
};

export default FilmsItem;
