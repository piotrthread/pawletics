import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

*, *::after, *::before{
  box-sizing: border-box;
  margin:0;
  padding:0;
  font-family: 'Quicksand', sans-serif;
  /* border:1px solid red; */
}
`;

export default GlobalStyle;
