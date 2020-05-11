import React, { useContext } from "react";
import Context from "../../context";
import styled from "styled-components";
import { format } from "date-fns";
import DateMenuText from "../DateMenuText/DateMenuText";

const MonthButtonComp = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0;
  outline: 0;
  cursor: pointer;
  width: 100%;
  background-color: ${(props) => (props.active ? "#6236DA" : "#7c4dff")};
  padding: 10px 0;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 146px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MonthButton = (props) => {
  const { state, dispatch } = useContext(Context);
  return (
    <MonthButtonComp
      onClick={() => dispatch("SET_MONTH", props.month)}
      active={
        props.month === parseInt(format(state.currentDate, "M")) - 1
          ? true
          : false
      }
    >
      <Wrapper>
        <DateMenuText>{months[props.month]}</DateMenuText>
        <DateMenuText>></DateMenuText>
      </Wrapper>
    </MonthButtonComp>
  );
};

export default MonthButton;
