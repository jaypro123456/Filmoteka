import { Link } from "react-router-dom";
import SignUp from "../components/SignUp";

const RegisterPage = () => {
  return (
    <section>
      <h1>Register Page</h1>

      <SignUp />

      <p>
        Уже зарегестрированы? <Link to={"/login"}>Login</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
