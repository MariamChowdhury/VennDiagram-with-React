import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SecondPage from "../SecondPage/SecondPage";
import "./InputBox.css";

const InputBox = () => {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState([]);
  const onSubmit = (data) => setFormData(data);
  const hideAndShow = () => {};
  return (
    <div className="input-container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="mb-3">
                <label className="form-label">First Input</label>
                <input
                  name="inputA"
                  pattern="[a-zA-Z]+"
                  className="form-control"
                  placeholder="Enter text list"
                  ref={register({ required: true })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Second Input</label>
                <input
                  name="inputB"
                  className="form-control"
                  ref={register({ required: true })}
                  pattern="[a-zA-Z]+"
                  placeholder="Enter text list"
                />
              </div>
              <input
                type="submit"
                onclick={hideAndShow()}
                className="btn brown-color text-white "
              />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul>
              <li>{formData.inputA}</li>
              <li>{formData.inputB}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
