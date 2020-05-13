import React from "react";
import styled from "styled-components";

const Primary = styled.p`
  display: inline-block;
  color: white;
  font-weight: 700;
  font-size: 45px;
  letter-spacing: -0.05em;
  padding: 15px;
`;

const Secondary = styled.span`
  color: white;
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
