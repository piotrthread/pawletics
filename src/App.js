import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import StateProvider from "./StateProvider/StateProvider";
import DateMenu from "./components/DateMenu/DateMenu";
import Calendar from "./components/Calendar/Calendar";

const Wrapper = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <StateProvider>
      <GlobalStyle />
      <Wrapper>
        <DateMenu />
        <Calendar />
      </Wrapper>
    </StateProvider>
  );
};

export default App;
