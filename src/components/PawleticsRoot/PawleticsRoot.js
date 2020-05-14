import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "../Login/Login";
import Context from "../../context";
import Pawletics from "../Pawletics/Pawletics";
import Register from "../Register/Register";

const PawleticsRoot = () => {
  const { currentUser } = useContext(Context);
  return (
    <Router>
      <Switch>
        <Route path="/register">
          {currentUser ? <Redirect to={"/"} /> : <Register />}
        </Route>
        <Route path="/login">
          {currentUser ? <Redirect to={"/"} /> : <Login />}
        </Route>
        <Route path="/">
          {currentUser ? <Pawletics /> : <Redirect to={"/login"} />}
        </Route>
      </Switch>
    </Router>
  );
};

export default PawleticsRoot;
