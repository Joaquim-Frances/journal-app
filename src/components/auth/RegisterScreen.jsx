import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <div>
      <h3 className="auth__title">Register</h3>
      <form action="">
        <input
          className="auth__input"
          type="text"
          placeholder="name"
          name="name"
          autoComplete="no"
        />
        <input
          className="auth__input"
          type="text"
          placeholder="email"
          name="email"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="password"
          name="password"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="confirm password"
          name="passwordConfirm"
        />

        <button type="submit" className="btn btn-primary btn-block">
          Register
        </button>

        <Link to="/auth/login" className="link mt-20">
          Already registered ?
        </Link>
      </form>
    </div>
  );
};
