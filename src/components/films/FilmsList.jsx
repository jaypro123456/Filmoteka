import FilmsItem from "./FilmsItem";
import styles from "./Films.module.css";

const FilmsList = ({ films }) => {
  const filmsElem =
    films.length > 0 &&
    films.map((film) => <FilmsItem key={film.id} {...film} />);

  return <ul className={styles.list}>{filmsElem}</ul>;
};

export default FilmsList;
