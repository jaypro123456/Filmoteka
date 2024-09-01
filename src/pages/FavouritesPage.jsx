import { useSelector } from "react-redux";
import FilmsList from "../components/films/FilmsList";
const FavouritesPage = () => {
  const favFilms = useSelector((state) => state.favorites.films);
  return (
    <section>
      <FilmsList films={favFilms} />
    </section>
  );
};

export default FavouritesPage;
