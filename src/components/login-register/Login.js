import React, { useState } from "react";

import classes from "./LoginRegister.module.scss";

export default function Login() {
  const [exist, setExist] = useState(false);

  const existHandler = (e) => {
    e.preventDefault();
    setExist(true);
  };

  return (
    <section className={classes["login-field"]}>
      <h2>Sign In</h2>
      <form onSubmit={existHandler}>
        <div>
          <label htmlFor="emailSignIn">Your Email:</label>
          <input
            type="email"
            id="emailSignIn"
            placeholder="Email Address"
            required
            style={exist ? { border: "1px solid #d83220" } : null}
          />
        </div>
        <div>
          <label htmlFor="passwordSignIn">Your Password:</label>
          <input
            type="password"
            id="passwordSignIn"
            placeholder="Password"
            required
            style={exist ? { border: "1px solid #d83220" } : null}
          />
        </div>

        <button>SIGN IN</button>
      </form>
      {exist && (
        <p style={{ textAlign: "center", marginTop: "10px", color: "#d83220" }}>
          Such account doesn`t exist.
        </p>
      )}
    </section>
  );
}
