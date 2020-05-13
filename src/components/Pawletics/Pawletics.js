import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../GlobalStyle/GlobalStyle";
import StateProvider from "../../StateProvider/StateProvider";
import DateMenu from "../DateMenu/DateMenu";
import Calendar from "../Calendar/Calendar";
import DayPanel from "../DayPanel/DayPanel";
import { useEffect, useContext } from "react";
import Context from "../../context";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 232px 750px 1fr;
`;

const Pawletics = () => {
  const { dispatch } = useContext(Context);
  useEffect(() => {
    dispatch("DONE"); // eslint-disable-next-line
  }, []);
  return (
    <StateProvider>
      <GlobalStyle />
      <Wrapper>
        <DateMenu />
        <Calendar />
        <DayPanel />
      </Wrapper>
    </StateProvider>
  );
};

export default Pawletics;
