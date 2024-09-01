import Form from "./Form";
import { useDispatch } from "react-redux";
import { setUsers } from "../store/slices/userSlice";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "./Loader";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (email, password) => {
    const auth = getAuth();
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch((error) => console.log(error));
    setTimeout(() => setIsLoading(false), 4000);
  };

  return (
    <div>
      {!isLoading ? (
        <Form title={"Зарегистрироваться"} handleClick={handleRegister} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SignUp;
