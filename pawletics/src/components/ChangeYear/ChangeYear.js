import React, { useContext } from "react";
import { format } from "date-fns";
import Context from "../../context";
import styled from "styled-components";
import DateMenuText from "../DateMenuText/DateMenuText";
import ArrowButton from "../ArrowButton/ArrowButton";

const Wrapper = styled.div`
  width: 146px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #7c4dff;
  margin-bottom: 45px;
`;

const ChangeYear = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <Wrapper>
      <ArrowButton prev onClick={() => dispatch("PREV_YEAR")} />
      <DateMenuText>{format(state.currentDate, "yyyy")}</DateMenuText>
      <ArrowButton next onClick={() => dispatch("NEXT_YEAR")} />
    </Wrapper>
  );
};

export default ChangeYear;
