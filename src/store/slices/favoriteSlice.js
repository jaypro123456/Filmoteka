import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  films: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites(state, action) {
      const isExists = state.films.find(
        (item) => item.id === action.payload.movie.id
      );

      if (!isExists) {
        state.films.push(action.payload.movie);
      } else {
        alert(
          "Тут что-то не так.. кажется, ты уже добавлял этот фильм в избранное"
        );
      }
    },
    removeFavorites(state) {},
  },
});

export const { addFavorites, removeFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
