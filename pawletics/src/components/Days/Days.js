import React, { useContext } from "react";
import Context from "../../context";
import {
  format,
  endOfMonth,
  startOfMonth,
  addDays,
  subDays,
  isSameMonth,
} from "date-fns";

import styled from "styled-components";

import Day from "../Day/Day";
import DaysWrapper from "./DaysWrapper";

const WeekDay = styled.span`
  color: #1be1ae;
  font-size: 20px;
`;

const Days = () => {
  const { state } = useContext(Context);
  const days = [];
  const monthStart = startOfMonth(state.currentDate);
  const monthEnd = endOfMonth(monthStart);
  let startDate = monthStart;
  while (parseInt(format(startDate, "i")) > 1) {
    startDate = subDays(startDate, 1);
  }
  let endDate = monthEnd;
  while (parseInt(format(endDate, "i")) < 7) {
    endDate = addDays(endDate, 1);
  }
  while (startDate <= endDate) {
    isSameMonth(startDate, state.currentDate)
      ? days.push(<Day date={startDate} key={startDate} />)
      : days.push(<Day secondary date={startDate} key={startDate} />);
    startDate = addDays(startDate, 1);
  }

  return (
    <>
      <DaysWrapper>
        <WeekDay>Mon</WeekDay>
        <WeekDay>Tue</WeekDay>
        <WeekDay>Wed</WeekDay>
        <WeekDay>Thu</WeekDay>
        <WeekDay>Fri</WeekDay>
        <WeekDay>Sat</WeekDay>
        <WeekDay>Sun</WeekDay>
        {days}
      </DaysWrapper>
    </>
  );
};

export default Days;
