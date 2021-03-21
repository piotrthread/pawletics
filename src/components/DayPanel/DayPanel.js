import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Context from "../../context";
import { format } from "date-fns";
import AddDogForm from "../AddDogForm/AddDogForm";
import AddActivityForm from "../AddActivityForm/AddActivityForm";
import { db } from "../../firebase";

const Wrapper = styled.div`
  padding-top: 65px;
  padding-left: 40px;
  -webkit-box-shadow: inset 4px 0px 9px -2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: inset 4px 0px 9px -2px rgba(0, 0, 0, 0.2);
  box-shadow: inset 4px 0px 9px -2px rgba(0, 0, 0, 0.2);
`;

const Today = styled.p`
  font-size: 25px;
  text-transform: uppercase;
`;
const Green = styled.span`
  color: #1be1ae;
`;

const DayPanel = () => {
  const {
    state,
    userDogs,
    dogActivities,
    setCurrentUserDogs,
    currentUser,
  } = useContext(Context);
  useEffect(() => {
    const userDogs = [];
    db.collection("dogs")
      .where("user_id", "==", currentUser.id)
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
      }); // eslint-disable-next-line
  }, [userDogs]);
  return (
    <Wrapper>
      <Today>
        {format(state.chosenDate, "EEEE ")}
        <Green>{format(state.chosenDate, "d.MM.Y")}</Green>
      </Today>
      {userDogs &&
        userDogs.map((dog) => (
          <div key={dog.id}>
            <p>{dog.name}</p>
            {dogActivities &&
              dogActivities
                .filter((el) => {
                  return (
                    el.dog_id === dog.id &&
                    format(el.date, "MM/dd/yyyy") ===
                      format(state.chosenDate, "MM/dd/yyyy")
                  );
                })
                .map((el) => <p key={el.id}>{el.type}</p>)}
            <AddActivityForm dogId={dog.id} />
          </div>
        ))}
      <AddDogForm />
    </Wrapper>
  );
};

export default DayPanel;
