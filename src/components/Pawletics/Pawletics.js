import React from "react";
import styled from "styled-components";
import DateMenu from "../DateMenu/DateMenu";
import Calendar from "../Calendar/Calendar";
import DayPanel from "../DayPanel/DayPanel";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 232px 750px 1fr;
`;

const Pawletics = () => {
  return (
    <Wrapper>
      <DateMenu />
      <Calendar />
      <DayPanel />
    </Wrapper>
  );
};

export default Pawletics;
