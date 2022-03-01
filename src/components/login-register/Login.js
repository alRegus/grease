import React from "react";

import classes from "./Login.module.scss";

export default function Login() {
  return (
    <section className={classes["login-field"]}>
      <h2>Sign In</h2>
      <form>
        <div>
          <label htmlFor="emailSignIn">Your Email:</label>
          <input type="email" id="emailSignIn" placeholder="Email Address" />
        </div>
        <div>
          <label htmlFor="passwordSignIn">Your Password:</label>
          <input type="password" id="passwordSignIn" placeholder="Password" />
        </div>
        <button>SIGN IN</button>
      </form>
    </section>
  );
}
