import React from "react";
import { format } from "date-fns";
import styled from "styled-components";
import { useContext } from "react";
import Context from "../../context";

const DayNumber = styled.span`
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
    left: -73%;
    z-index: -3;
  }
`;

const Wrapper = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  position: relative;
`;

const Day = (props) => {
  const { state, dispatch } = useContext(Context);
  const today = state.chosenDate;
  return (
    <Wrapper onClick={() => dispatch("SET_DATE", props.date)}>
      {props.secondary ? (
        <DayNumber
          secondary
          current={
            format(props.date, "MM/dd/yyyy") === format(today, "MM/dd/yyyy")
              ? true
              : false
          }
        >
          {parseInt(format(props.date, "d"))}
        </DayNumber>
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
      )}
    </Wrapper>
  );
};
export default Day;
