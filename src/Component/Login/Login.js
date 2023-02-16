import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
        alt=""
      />

      <form>
        <input type="text" placeholder="Full Name (required if registering)" />
        <input type="text" placeholder="Profile pic URL (optional)" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
    </div>
  );
}

export default Login;
