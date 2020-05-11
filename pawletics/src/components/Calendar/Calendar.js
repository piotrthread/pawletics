import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";

const Wrapper = styled.div`
  width: 1005px;
  height: 100vh;
  padding-top: 57px;
  padding-left: 70px;
  padding-right: 70px;
`;

const DateMenu = () => {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
};

export default DateMenu;
