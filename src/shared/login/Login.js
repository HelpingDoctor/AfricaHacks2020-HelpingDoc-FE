import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <button className="btn btn-primary" onClick={() => loginWithRedirect()}>
      Get Started
    </button>
  );
}

export default Login;