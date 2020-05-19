import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import Context from "../../context";

const Greet = styled.span`
  margin-right: 56px;
  margin-top: 15px;
  color: #595959;
  font-size: 20px;
`;
const Strong = styled.strong`
  color: #595959;
`;

const Greeting = () => {
  const { currentUser } = useContext(Context);
  return (
    <>
      <Greet>
        Welcome <Strong>{currentUser && currentUser.name}</Strong> !
      </Greet>
    </>
  );
};

export default Greeting;
