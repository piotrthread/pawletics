import React, { useContext, useState } from "react";
import Context from "../../context";
import styled from "styled-components";
import { useFormik } from "formik";
import { auth, db } from "../../firebase";

import RegisterWrapper from "./RegisterWrapper";
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
  height: 290px;
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

const Register = () => {
  const { state, currentUser, dispatch } = useContext(Context);
  const [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: (values) => {
      dispatch("LOADING");
      auth
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((res) => {
          db.collection("users").doc(res.user.uid).set({
            id: res.user.uid,
            name: values.name,
          });
        })
        .then(() => {
          currentUser && dispatch("DONE");
        })
        .catch((err) => {
          dispatch("DONE");
          switch (err.code) {
            case "auth/invalid-email":
              setError("Email adress is badly formated.");
              break;
            case "auth/weak-password":
              setError("Password must be 6 characters long.");
              break;
            case "auth/email-already-in-use":
              setError("Email is already in use.");
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
        <RegisterWrapper>
          <LogoWhite />
          <LoginForm onSubmit={formik.handleSubmit}>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              autoComplete="off"
            />
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
            <Submit type="submit" value="REGISTER" />
            <Link href="/login">or Login</Link>
            <Error>{error}</Error>
          </LoginForm>
        </RegisterWrapper>
      )}
    </>
  );
};

export default Register;
