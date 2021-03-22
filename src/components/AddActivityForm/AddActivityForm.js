import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import Context from "../../context";

const AddActivityForm = (props) => {
  const { register, handleSubmit } = useForm();
  const { currentUser, state, addActivity } = useContext(Context);
  const onSubmit = (data, e) => {
    db.collection("activities")
      .add({
        date: state.chosenDate,
        type: data.type,
        user_id: currentUser.id,
        dog_id: props.dogId,
      })
      .then((res) =>
        addActivity(
          res.id,
          state.chosenDate,
          props.dogId,
          data.type,
          currentUser.id
        )
      );
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <select name="type" ref={register}>
          <option value="Frisbee">Frisbee</option>
          <option value="Agility">Agility</option>
          <option value="Fitness">Fitness</option>
          <option value="Spacer">Spacer</option>
          <option value="Węszenie">Węszenie</option>
          <option value="Sztuczki">Sztuczki</option>
        </select>
        <input type="submit" value="ADD" />
      </form>
    </>
  );
};

export default AddActivityForm;
