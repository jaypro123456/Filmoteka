import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";
import Layout from "./components/Layout/Layout";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import FavouritesPage from "./pages/FavouritesPage";
import AccountPage from "./pages/AccountPage";
import SearchPage from "./pages/SearchPage";
import NotFound from "./components/NotFound/NotFound";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavouritesPage />} />
          <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
