import { useDispatch } from "react-redux";
import { removeUsers } from "../store/slices/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";

const AccountPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeUsers());
 navigate("/")
  };

  return (
    <div className="account-page">
      <h1 className="account-page__title">Account Page</h1>
      <button className="account-page__logout-button" onClick={handleLogout}>
        Выйти
      </button>
      <p className="account-page__message">
        уходи, изверг! и только посмей вернуться(ну пожалуйста останься...)
      </p>
      <Link to={"/"}>
          <button className="dontGo">На главную</button>
        </Link>
    </div>
  );
};

export default AccountPage;
