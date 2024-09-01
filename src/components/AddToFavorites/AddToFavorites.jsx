import { useDispatch } from "react-redux";
import styles from "./AddToFavorites.module.css";
import { addFavorites } from "../../store/slices/favoriteSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
const AddToFavorites = ({ movie }) => {
  const films = useSelector((state) => state.favorites.films);
  const added = films.find((film) => film.id === movie.id);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.token);

  const handleClick = () => {
    if (isAuth) {
      dispatch(
        addFavorites({
          movie,
        })
      );
      setAdedd(true);
    } else {
      alert("Для добавления в избранное необходимо авторизоваться");
      navigate("/login");
    }
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      {added ? "В избранном!" : "Добавить в избранное"}
    </button>
  );
};

export default AddToFavorites;
