import { useState, useEffect } from "react";
import { fetchFilms } from "../api/fetchFilms";
import FilmsList from "../components/films/FilmsList";
import Pagination from "../pagination/Pagination";
import Loader from "../components/Loader";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const [films, setFilms] = useState([]);
  const handleChangePage = (type) => {
    if (type == "plus") {
      setPage(page + 1);
    } else if (type == "minus" && page >= 2) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    const type = `trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}`;
    setIsLoading(true);

    fetchFilms(type).then(({ data }) => {
      setTotalPages(data.total_pages);
      setFilms(data.results);
    });
    setTimeout(() => setIsLoading(false), 1000);
  }, [page]);

  return (
    <section>
      {!isLoading ? <FilmsList films={films} /> : <Loader />}
      <Pagination
        totalPages={totalPages}
        handleChangePage={handleChangePage}
        page={page}
      />
    </section>
  );
};

export default HomePage;
