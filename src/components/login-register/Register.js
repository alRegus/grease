import React from "react";

import classes from "./Login.module.scss";

export default function Register() {
  return (
    <section className={classes["register-field"]}>
      <h2>Create an Account</h2>
      <form>
        <div>
          <label htmlFor="emailRegister">Your Email:</label>
          <input type="email" id="emailRegister" placeholder="Email Address" />
        </div>
        <div>
          <label htmlFor="passwordRegister">Your Password:</label>
          <input type="password" id="passwordRegister" placeholder="Password" />
        </div>
        <div>
          <label htmlFor="passwordConfirmRegister">Confirm Password:</label>
          <input
            type="password"
            id="passwordConfirmRegister"
            placeholder="Confirm Password"
          />
        </div>
        <button>CREATE ACCOUNT</button>
      </form>
    </section>
  );
}
