import { Link } from "react-router-dom";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <section>
      <h1>Login Page</h1>

      <Login />

      <p>
        Еще не зарегестрированы? <Link to={"/register"}>Register</Link>
      </p>
    </section>
  );
};

export default LoginPage;
