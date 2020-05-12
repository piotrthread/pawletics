import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import Days from "../../components/Days/Days";

const Wrapper = styled.div`
  width: 750px;
  height: 100vh;
  padding-top: 57px;
  border-right: 1px solid lightgray;
`;

const DateMenu = () => {
  return (
    <Wrapper>
      <Logo />
      <Days />
    </Wrapper>
  );
};

export default DateMenu;
