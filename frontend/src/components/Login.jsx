import React, { useContext, useRef, useEffect } from "react";
import styles from "../styles/register.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Login() {
  let { loginUser } = useContext(AuthContext);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.bg}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Login to your account</h2>
        <form className={styles.form} onSubmit={loginUser}>
          <label>
            <p className={styles.label}>Email</p>
            <input
              className={styles.inputField}
              id="email"
              type="email"
              ref={inputRef}
              placeholder="Enter your email"
              required
            />
          </label>
          <label>
            <p className={styles.label}>Password</p>
            <input
              className={styles.inputField}
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </label>
          <input
            id="submit-btn"
            className={styles.btn}
            type="submit"
            value="Log In"
          />
        </form>
        <p className={styles.bottom_text}>
          New to MyApp?
          <Link to="/register" className={styles.link}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
