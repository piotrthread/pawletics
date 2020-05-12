import React from "react";
import styled from "styled-components";

const Primary = styled.p`
  display: inline-block;
  color: #7c4dff;
  font-weight: 700;
  font-size: 32px;
  letter-spacing: -0.05em;
  margin-left: 56px;
  margin-bottom: 57px;
`;

const Secondary = styled.span`
  color: #1be1ae;
  font-weight: 200;
`;

const Logo = () => {
  return (
    <>
      <Primary>
        paw<Secondary>letics</Secondary>
      </Primary>
    </>
  );
};

export default Logo;
