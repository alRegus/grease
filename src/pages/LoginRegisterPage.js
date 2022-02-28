import React from "react";
import { useSelector } from "react-redux";

import ToggleLogin from "../components/login-register/ToggleLogin";
import Login from "../components/login-register/Login";
import Register from "../components/login-register/Register";
import classes from "./LoginRegisterPage.module.scss";

export default function LoginRegisterPage() {
  const signIn = useSelector((state) => state.signIn.signIn);

  return (
    <div className={classes["login-register"]}>
      <div className={classes["login-register-card"]}>
        <ToggleLogin />
        {signIn ? <Login /> : <Register />}
      </div>
    </div>
  );
}
