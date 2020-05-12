import React, { useReducer } from "react";
import { addYears, subYears, setMonth } from "date-fns";
import Context from "../context";

const initialState = {
  currentDate: new Date(),
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
    default:
      return state;
  }
};

const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        state: state,
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
