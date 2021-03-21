import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import Context from "../../context";

const AddDogForm = () => {
  const { register, handleSubmit } = useForm();
  const { currentUser, addDog } = useContext(Context);
  const onSubmit = (data, e) => {
    db.collection("dogs").add({
      name: data.name,
      user_id: currentUser.id,
    });
    addDog(data.name, currentUser.id);
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <input
          type="text"
          name="name"
          ref={register}
          placeholder="DOG's NAME"
          required
        />
        <input type="submit" value="ADD" />
      </form>
    </>
  );
};

export default AddDogForm;
