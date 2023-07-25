import React from "react";
//we install package useform then we import it
import { useForm } from "react-hook-form";
const AddMovie = ({myHandleAdd }) => {
  const {
    //function we use itwhen we submit
    handleSubmit,
    //we used just inside <input/> that take the name of input and methode we shoose methode required 
    register,
    //make input empty after submit
    reset,
    //make us set error if input didnt get value
    formState: { errors },
  } = useForm();
  //function onSubmit make the imput empty after submit after calling 'reset()'
  const onSubmit = (data) => {
    myHandleAdd(data);
    console.log(data);
    reset();
  };
  return (
    <div style={{ fontFamily: "Roboto sansSerif" }}>
      <h3 style={{ color: "#61dafb" }}>Adding new movie</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            color: "black",
            margin: 20,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 20,
            alignItems: "center",
          }}
        >
          <div>
            <label>Title : </label>

            <input
              type="text"
              placeholder="Add title"
              {...register("title", { required: true })}
            />
            {/* display a message 'required if we dont have value in input' */}
            {errors.title && <p>required title</p>}
          </div>
          <div>
            <label> URL : </label>
            <input
              type="text"
              placeholder="Add URL"
              {...register("url", { required: true })}
            />
            {errors.url && <p>required url</p>}
            {}
          </div>
          <div>
            <label>Description : </label>
            <input
              type="text"
              placeholder="Add description"
              {...register("description", { required: true })}
            />
            {errors.description && <p>required url</p>}
          </div>
          <br />
          <div>
            <label>Rate : </label>
            <input
              type="number"
              placeholder="Add rate"
              {...register("rate", { required: true, maxLength: 1 })}
            />
            {errors.rate && <p>required rate and least 1 charracter</p>}
          </div>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
