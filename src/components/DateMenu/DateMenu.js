import React from "react";
import styled from "styled-components";
import ChangeYear from "../ChangeYear/ChangeYear";
import ChangeMonth from "../ChangeMonth/ChangeMonth";

const Wrapper = styled.div`
  /* width: 232px; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 65px;
  background-color: #7c4dff;
`;

const DateMenu = () => {
  return (
    <Wrapper>
      <ChangeYear />
      <ChangeMonth />
    </Wrapper>
  );
};

export default DateMenu;
