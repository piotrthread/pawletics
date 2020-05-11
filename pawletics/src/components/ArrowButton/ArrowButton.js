import React from "react";
import styled from "styled-components";
import DateMenuText from "../DateMenuText/DateMenuText";

const Wrapper = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  background-color: none;
  cursor: pointer;
  background-color: #7c4dff;
  padding-bottom: 5px;
`;

const ArrowButton = (props) => {
  return (
    <Wrapper onClick={props.onClick}>
      <DateMenuText>
        {props.next ? ">" : null}
        {props.prev ? "<" : null}
      </DateMenuText>
    </Wrapper>
  );
};

export default ArrowButton;
