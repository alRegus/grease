import React from "react";
import { useSelector } from "react-redux";

import ToggleLogin from "../components/login-register/ToggleLogin";
import Login from "../components/login-register/Login";
import Register from "../components/login-register/Register";

export default function LoginRegisterPage() {
  const signIn = useSelector((state) => state.signIn.signIn);

  return (
    <div className="login-register">
      <div className="login-register-card">
        <ToggleLogin />
        {signIn ? <Login /> : <Register />}
      </div>
    </div>
  );
}
