import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import Days from "../../components/Days/Days";
import Greeting from "../Greeting/Greeting";

const Wrapper = styled.div`
  /* width: 750px; */
  height: 100vh;
  padding-top: 57px;
`;
const Welcome = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DateMenu = () => {
  return (
    <Wrapper>
      <Welcome>
        <Logo />
        <Greeting />
      </Welcome>

      <Days />
    </Wrapper>
  );
};

export default DateMenu;
