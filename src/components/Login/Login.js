import React, { useContext, useState } from "react";
import Context from "../../context";
import styled from "styled-components";
import { useFormik } from "formik";
import { auth } from "../../firebase";

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
  justify-content: flex-start;
  height: 250px;
  align-items: center;
`;

const Error = styled.p``;
const Link = styled.a`
  -webkit-appearance: none;
  -moz-appearance: none;
  color: white;
  text-decoration: underline;
  margin-bottom: 10px;
`;

const Login = () => {
  const { state, dispatch } = useContext(Context);
  const [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch("LOADING");
      auth
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(() => {
          dispatch("DONE");
        })
        .catch((err) => {
          dispatch("DONE");
          switch (err.code) {
            case "auth/invalid-email":
              setError("Email adress is badly formated.");
              break;
            case "auth/wrong-password":
              setError("Invalid password.");
              break;
            case "auth/user-not-found":
              setError("No such user. User may have been deleted.");
              break;
            default:
              setError(err.message);
              break;
          }
        });
    },
  });
  return (
    <>
      {state.logging ? (
        <Logging />
      ) : (
        <LoginWrapper>
          <LogoWhite />
          <LoginForm onSubmit={formik.handleSubmit}>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="e-mail"
              onChange={formik.handleChange}
              value={formik.values.email}
              autoComplete="off"
            />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <Submit type="submit" value="LOGIN" />
            <Link href="/register">or Register</Link>
            <Error>{error}</Error>
          </LoginForm>
        </LoginWrapper>
      )}
    </>
  );
};

export default Login;
