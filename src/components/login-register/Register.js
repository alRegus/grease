import React from "react";

export default function Register() {
  return (
    <section>
      <form>
        <div>
          <label htmlFor="emailRegister">Your Email:</label>
          <input type="email" id="emailRegister" />
        </div>
        <div>
          <label htmlFor="passwordRegister">Your Password:</label>
          <input type="password" id="passwordRegister" />
        </div>
        <div>
          <label htmlFor="passwordConfirmRegister">Confirm Password:</label>
          <input type="password" id="passwordConfirmRegister" />
        </div>
        <button>CREATE ACCOUNT</button>
      </form>
    </section>
  );
}
