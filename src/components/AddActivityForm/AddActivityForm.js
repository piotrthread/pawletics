import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import Context from "../../context";

const AddActivityForm = (props) => {
  const { register, handleSubmit } = useForm();
  const { currentUser, state, addActivity } = useContext(Context);
  const onSubmit = (data, e) => {
    db.collection("activities").add({
      date: state.chosenDate,
      type: data.type,
      user_id: currentUser.id,
      dog_id: props.dogId,
    });
    addActivity(state.chosenDate, data.type, currentUser.id, props.dogId);
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <input
          type="text"
          name="type"
          ref={register}
          placeholder="type"
          required
        />
        <input type="submit" value="ADD" />
      </form>
    </>
  );
};

export default AddActivityForm;
