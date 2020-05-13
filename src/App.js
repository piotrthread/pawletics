import React from "react";
import StateProvider from "./StateProvider/StateProvider";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import PawleticsRoot from "./components/PawleticsRoot/PawleticsRoot";

const App = () => {
  return (
    <StateProvider>
      <GlobalStyle />
      <PawleticsRoot />
    </StateProvider>
  );
};

export default App;
