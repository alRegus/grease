import React from "react";

export default function Login() {
  return (
    <section>
      <form>
        <div>
          <label htmlFor="emailSignIn">Your Email:</label>
          <input type="email" id="emailSignIn" />
        </div>
        <div>
          <label htmlFor="passwordSignIn">Your Password:</label>
          <input type="password" id="passwordSignIn" />
        </div>
        <button>SIGN IN</button>
      </form>
    </section>
  );
}
