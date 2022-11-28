import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import styles from "../styles/register.module.css";

function Register() {
  const inputRef = useRef();

  let { registerUser } = useContext(AuthContext);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.bg}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Create Account</h2>
        <form className={styles.form} onSubmit={registerUser}>
          <label>
            <p className={styles.label}>Name</p>
            <input
              className={styles.inputField}
              id="name"
              type="text"
              ref={inputRef}
              placeholder="Enter your name"
              required
            />
          </label>
          <label>
            <p className={styles.label}>Email</p>
            <input
              className={styles.inputField}
              id="email"
              type="email"
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
            value="Sign Up"
          />
        </form>
        <p className={styles.bottom_text}>
          Already have an account?
          <Link to="/login" className={styles.link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
