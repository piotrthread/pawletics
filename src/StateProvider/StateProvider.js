import React, { useReducer, useState, useEffect } from "react";
import { addYears, subYears, setMonth } from "date-fns";
import Context from "../context";
import { auth, db } from "../firebase";

const initialState = {
  currentDate: new Date(),
  chosenDate: new Date(),
  logging: false,
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
    case "LOADING":
      return { ...state, logging: true };
    case "DONE":
      return { ...state, logging: false };
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
    const authorization = auth.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((res) => setUser(res.data()));
      } else {
        setUser(null);
      }
    });
    return () => authorization();
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
