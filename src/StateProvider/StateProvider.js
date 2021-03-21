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
    case "HIDE_ADDFORM":
      return { ...state, adding: !state.adding };
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
  const [activities, setActivities] = useState(null);
  const [currentUserDogs, setCurrentUserDogs] = useState(null);
  useEffect(() => {
    const userDogs = [];
    const userActivities = [];
    const authorization = auth.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((res) => setUser(res.data()));
        db.collection("dogs")
          .where("user_id", "==", user.uid)
          .get()
          .then((response) => {
            response.forEach((doc) => {
              userDogs.push({
                id: doc.id,
                name: doc.data().name,
                user_id: doc.data().user_id,
              });
            });
          })
          .then(() => {
            setCurrentUserDogs(userDogs);
          });
        db.collection("activities")
          .where("user_id", "==", user.uid)
          .get()
          .then((response) => {
            response.forEach((doc) => {
              userActivities.push({
                id: doc.id,
                type: doc.data().type,
                date: doc.data().date.toDate(),
                dog_id: doc.data().dog_id,
                user_id: doc.data().user_id,
              });
            });
          })
          .then(() => {
            setActivities(userActivities);
          });
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
        userDogs: currentUserDogs,
        dogActivities: activities,
        addDog: (name, user_id) => {
          setCurrentUserDogs([
            ...currentUserDogs,
            { name: name, user_id: user_id },
          ]);
        },
        addActivity: (date, type, user_id, dog_id) => {
          setActivities([
            ...activities,
            {
              type: type,
              date: date,
              dog_id: dog_id,
              user_id: user_id,
            },
          ]);
        },
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
