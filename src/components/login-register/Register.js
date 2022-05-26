import React, { useRef, useState } from "react";

import classes from "./LoginRegister.module.scss";

export default function Register() {
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [deniedRegistering, setDeniedRegistering] = useState(false);

  const pass = useRef();
  const confirmPass = useRef();

  const createHandler = (e) => {
    e.preventDefault();
    if (pass.current.value !== confirmPass.current.value) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
      setDeniedRegistering(true);
    }
  };

  return (
    <section className={classes["register-field"]}>
      <h2>Create an Account</h2>
      <form onSubmit={createHandler}>
        <div>
          <label htmlFor="emailRegister">Your Email:</label>
          <input
            type="email"
            id="emailRegister"
            placeholder="Email Address"
            required
          />
        </div>
        <div>
          <label htmlFor="passwordRegister">Your Password:</label>
          <input
            type="password"
            id="passwordRegister"
            placeholder="Password"
            required
            ref={pass}
            style={passwordCheck ? { border: "1px solid #d83220" } : null}
          />
        </div>
        <div>
          <label htmlFor="passwordConfirmRegister">Confirm Password:</label>
          <input
            type="password"
            id="passwordConfirmRegister"
            placeholder="Confirm Password"
            required
            ref={confirmPass}
            style={passwordCheck ? { border: "1px solid #d83220" } : null}
          />
        </div>
        <button>CREATE ACCOUNT</button>
      </form>
      {passwordCheck && (
        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: "#d83220",
            width: "80%",
          }}
        >
          Password`s don`t match. Please Enter Matching Password in Confirm
          Password Field
        </p>
      )}
      {deniedRegistering && (
        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: "#d83220",
            width: "80%",
          }}
        >
          Your country is not supported. Sorry for the inconvenience. ;(
        </p>
      )}
    </section>
  );
}
