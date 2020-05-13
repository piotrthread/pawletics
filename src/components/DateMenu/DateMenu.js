import React, { useContext } from "react";
import Context from "../../context";
import styled from "styled-components";
import ChangeYear from "../ChangeYear/ChangeYear";
import ChangeMonth from "../ChangeMonth/ChangeMonth";

const Wrapper = styled.div`
  position: relative;
  /* width: 232px; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 65px;
  background-color: #7c4dff;
`;

const Logout = styled.img`
  position: absolute;
  z-index: 2;
  bottom: 45px;
  height: 25px;
  margin-left: 45px;
  align-self: flex-start;
  justify-self: self-end;
  cursor: pointer;
`;

const DateMenu = () => {
  const { dispatch } = useContext(Context);
  return (
    <Wrapper>
      <ChangeYear />
      <ChangeMonth />
      <Logout
        src="images/logout.svg"
        alt="logout"
        onClick={() => dispatch("LOGOUT")}
      />
    </Wrapper>
  );
};

export default DateMenu;
