import { Link } from "react-router-dom";
import logo from "../../assets/img/cinematica.png";
import { useSelector } from "react-redux";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const isAuth = useSelector((state) => state.user.token);
  const email = useSelector((state) => state.user.email);
  return (
    <header className="header">
      <Link to={"/"}>
        <img width={80} src={logo} alt="logo" />
      </Link>

      <nav className="menu">
        <Link className="search-btn" to={"/search"}>
        
          <FaSearch />
        </Link>
        <Link to={"/films"}>Фильмы</Link>
        <Link to={"/series"}>Сериалы</Link>
        <Link to={"/cartoon"}>Мультфильмы</Link>
        {isAuth && <Link to={"favorites"}>Смотреть позже</Link>}
        {isAuth ? (
          <Link to={"/account"}>{email}</Link>
        ) : (
          <Link className="menu__login" to={"/login"}>
            <RiAccountBoxFill />
            Войти
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
