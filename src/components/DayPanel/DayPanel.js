import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../../context";
import { format } from "date-fns";

const Wrapper = styled.div`
  padding-top: 65px;
  padding-left: 40px;
  -webkit-box-shadow: inset 4px 0px 9px -2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: inset 4px 0px 9px -2px rgba(0, 0, 0, 0.2);
  box-shadow: inset 4px 0px 9px -2px rgba(0, 0, 0, 0.2);
`;

const Today = styled.p`
  font-size: 25px;
  text-transform: uppercase;
`;
const Green = styled.span`
  color: #1be1ae;
`;

const DayPanel = () => {
  const { state } = useContext(Context);
  return (
    <Wrapper>
      <Today>
        {format(state.chosenDate, "EEEE ")}
        <Green>{format(state.chosenDate, "d.MM.Y")}</Green>
      </Today>
    </Wrapper>
  );
};

export default DayPanel;
