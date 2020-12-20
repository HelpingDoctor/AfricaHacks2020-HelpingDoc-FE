import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
function Signup() {
  const { loginWithRedirect } = useAuth0();
  return (
    <button className="btn btn-primary" onClick={() => loginWithRedirect()}>
      Sign up
    </button>
  );
}

export default Signup;
