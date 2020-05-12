import styled from "styled-components";

const DaysWrapper = styled.div`
  display: grid;
  width: 92%;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  grid-row-gap: 50px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    display: block;
    background-color: #1be1ae;
    width: 91.5%;
    height: 1px;
    top: 48px;
  }
`;

export default DaysWrapper;
