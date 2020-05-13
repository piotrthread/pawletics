import React, { useContext } from "react";
import Context from "../../context";
import styled from "styled-components";

import LoginWrapper from "./LoginWrapper";
import LogoWhite from "../Logo/LogoWhite";
import Logging from "../Logging/Logging";

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0;
  outline: 0;
  margin: 8px;
  padding: 15px;
  display: block;
  width: 250px;
  height: 40px;
  font-size: 14px;
  font-weight: 200;
  border-radius: 20px;
`;
const Submit = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #1be1ae;
  color: white;
  cursor: pointer;
  border: 0;
  outline: 0;
  margin: 20px;
  display: block;
  width: 150px;
  height: 40px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 20px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <>
      {state.logging ? (
        <Logging />
      ) : (
        <LoginWrapper>
          <LogoWhite />
          <LoginForm
            onSubmit={(e) => {
              e.preventDefault();
              dispatch("LOADING");
              dispatch("LOGIN", {
                email: e.target[0].value,
                password: e.target[1].value,
              });
            }}
          >
            <Input
              type="text"
              name="email"
              placeholder="email"
              autoComplete="off"
            />
            <Input type="password" name="password" placeholder="password" />
            <Submit type="submit" value="LOGIN" />
          </LoginForm>
        </LoginWrapper>
      )}
    </>
  );
};

export default Login;
