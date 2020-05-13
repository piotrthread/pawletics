import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../Login/Login";
import Context from "../../context";
import Pawletics from "../Pawletics/Pawletics";

const PawleticsRoot = () => {
  const { currentUser } = useContext(Context);
  return (
    <Router>
      <Switch>
        <Route path="/">{currentUser ? <Pawletics /> : <Login />}</Route>
      </Switch>
    </Router>
  );
};

export default PawleticsRoot;
