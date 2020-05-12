import React from "react";
import { format } from "date-fns";
import styled from "styled-components";

const DayNumber = styled.span`
  position: relative;
  width: 20px;
  text-align: center;
  font-weight: 200;
  color: ${(props) => (props.secondary ? "#C3C3C3" : "#595959")};
  ${(props) => (props.current ? "color:white;" : null)}
  &::after {
    content: "";
    display: ${(props) => (props.current ? "block" : "none")};
    background-color: #1be1ae;
    width: 48px;
    height: 48px;
    border-radius: 25px;
    position: absolute;
    top: -14px;
    left: -65%;
    z-index: -3;
  }
`;

const Day = (props) => {
  const today = new Date();
  return props.secondary ? (
    <DayNumber secondary>{parseInt(format(props.date, "d"))}</DayNumber>
  ) : (
    <DayNumber
      current={
        format(props.date, "MM/dd/yyyy") === format(today, "MM/dd/yyyy")
          ? true
          : false
      }
    >
      {parseInt(format(props.date, "d"))}
    </DayNumber>
  );
};
export default Day;
