import React from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./ToggleLogin.module.scss";

export default function ToggleLogin() {
  const signIn = useSelector((state) => state.signIn.signIn);
  const dispatch = useDispatch();

  const toCreateAccHandler = () => {
    dispatch({ type: "GET_SIGN_IN", payload: false });
  };

  const toSignInHandler = () => {
    dispatch({ type: "GET_SIGN_IN", payload: true });
  };

  return (
    <section className={classes["toggle-login"]}>
      <h1>Grease</h1>
      {signIn && (
        <div>
          <p>New Customer?</p>
          <button onClick={toCreateAccHandler}>CREATE AN ACCOUNT</button>
        </div>
      )}
      {!signIn && (
        <div>
          <p>Have an Account?</p>
          <button onClick={toSignInHandler}>SIGN IN</button>
        </div>
      )}
    </section>
  );
}
