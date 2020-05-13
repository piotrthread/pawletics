import React, { useContext } from "react";
import Context from "../../context";

import LoginWrapper from "./LoginWrapper";

const Login = () => {
  const { dispatch } = useContext(Context);
  return (
    <LoginWrapper>
      <h1>DOG CALENDAR</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch("LOGIN", {
            email: e.target[0].value,
            password: e.target[1].value,
          });
        }}
      >
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" value="LOGIN" />
      </form>
    </LoginWrapper>
  );
};

export default Login;
