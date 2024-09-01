import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import favoriteSlice from "./slices/favoriteSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    favorites: favoriteSlice,
  },
});
