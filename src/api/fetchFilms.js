import axios from "axios";

export const fetchFilms = async (type, movieId) => {

  const API = `https://api.themoviedb.org/3/${type}`;

  try {
    const data = await axios.get(API);

    return data;
  } catch (error) {
    console.error(`Error fetching trending films: ${error.message}`);
  }
};
