import React, { useState } from "react";

const Greeting = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>Greeting</h1>
      {isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in.</p>}
      <button onClick={toggleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Greeting;
