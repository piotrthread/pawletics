import React, { useReducer, useState, useEffect } from "react";
import { addYears, subYears, setMonth } from "date-fns";
import Context from "../context";
import { auth } from "../firebase";

const initialState = {
  currentDate: new Date(),
  chosenDate: new Date(),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_YEAR":
      return { ...state, currentDate: addYears(state.currentDate, 1) };
    case "PREV_YEAR":
      return { ...state, currentDate: subYears(state.currentDate, 1) };
    case "SET_MONTH":
      return {
        ...state,
        currentDate: setMonth(state.currentDate, action.payload),
      };
    case "SET_DATE":
      return {
        ...state,
        chosenDate: action.payload,
      };
    case "LOGIN":
      auth
        .auth()
        .signInWithEmailAndPassword(
          action.payload.email,
          action.payload.password
        );
      return state;
    case "LOGOUT":
      auth.auth().signOut();
      return state;
    default:
      return state;
  }
};

const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth
      .auth()
      .onAuthStateChanged((user) => (user ? setUser(user.uid) : setUser(null)));
  }, []);

  return (
    <Context.Provider
      value={{
        state: state,
        currentUser: user,
        dispatch: (action, data) => {
          dispatch({ type: action, payload: data });
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default StateProvider;
