import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUsers } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "./Loader";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUsers({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch((error) => alert("Неправильный логин или пароль"));
    setTimeout(() => setIsLoading(false), 4000);
  };

  return (
    <div>
      {!isLoading ? (
        <Form title="Войти" handleClick={handleLogin} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Login;
