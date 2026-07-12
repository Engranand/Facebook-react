import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "123456") {
      navigate("/home");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">

        <div className="loginLeft">
          <h1 className="loginLogo">facebook</h1>
          <p className="loginDesc">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>

            <input
              type="email"
              className="loginInput"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              className="loginInput"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="loginButton" type="submit">
              Log In
            </button>

            <span className="loginForgot">
              Forgotten password?
            </span>

            <hr />

            <button
              className="loginRegisterButton"
              type="button"
            >
              Create New Account
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Login;