import React from "react";
import styled from "styled-components";
import Ellipsis from "./Ellipsis";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #7c4dff;
  color: white;
`;

const Logging = () => {
  return (
    <Wrapper>
      <Ellipsis />
    </Wrapper>
  );
};

export default Logging;
