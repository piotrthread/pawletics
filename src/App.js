import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import StateProvider from "./StateProvider/StateProvider";
import DateMenu from "./components/DateMenu/DateMenu";
import Calendar from "./components/Calendar/Calendar";
import DayPanel from "./components/DayPanel/DayPanel";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 232px 750px 1fr;
`;

const App = () => {
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

export default App;
