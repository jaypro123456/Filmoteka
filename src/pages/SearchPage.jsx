import SearchBar from "../components/search/SearchBar";
import FilmsList from "../components/films/FilmsList";
import { useEffect, useState } from "react";
import { fetchFilms } from "../api/fetchFilms";
import Loader from "../components/Loader";
import Pagination from "../pagination/Pagination";

const SearchPage = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState("");
  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    const type = `movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
    fetchFilms(type).then(({ data }) => setFilms(data.results));
  }, []);
  const handleChangePage = (type) => {
    if (type == "plus") {
      setPage(page + 1);
    } else if (type == "minus" && page >= 2) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    const type = `search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${query}&page=${page}`;
    if (query) {
      setIsLoading(true);
      fetchFilms(type).then(({ data }) => {
        setTotalPages(data.total);
        setFilms(data.results);
      });
    }
    setTimeout(() => setIsLoading(false), 1000);
  }, [query, page]);

  const handleClick = (data) => {
    setQuery(data);
  };

  return (
    <section>
      <div className="container">
        <SearchBar handleClick={handleClick} />

        <h2 className="search-title">Можешь еще это глянуть, хз</h2>

        {!isLoading ? <FilmsList films={films} /> : <Loader />}
        <Pagination
          totalPages={totalPages}
          handleChangePage={handleChangePage}
          page={page}
        />
      </div>
    </section>
  );
};

export default SearchPage;
