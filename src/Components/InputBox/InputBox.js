import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./InputBox.css";

const InputBox = () => {
  const { register, handleSubmit } = useForm();
  const [dataA, setDataA] = useState(null);
  const [dataB, setDataB] = useState(null);

  const onSubmit = (data) => {
    const InputA = data.inputA.split(" ");
    setDataA(InputA);
    const InputB = data.inputB.split(" ");
    setDataB(InputB);
    //difference between a and b
    var a = new Set(InputA);
    var b = new Set(InputB);
    var differenceA = [...InputA].filter((x) => !b.has(x));
    console.log(differenceA);
    var differenceB = [...InputB].filter((y) => !a.has(y));
    console.log(differenceB);
  };

  return (
    <div className="input-container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 form-container green-color">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div class="mb-3">
                <label className="form-label">First Input</label>
                <input
                  name="inputA"
                  type="text"
                  className="form-control"
                  placeholder=""
                  ref={register({ required: true })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Second Input</label>
                <input
                  name="inputB"
                  type="text"
                  className="form-control"
                  ref={register({ required: true })}
                />
              </div>
              <input type="submit" className="btn brown-color text-white " />
            </form>
          </div>
        </div>
        <div className="row" id="show">
          <div className="col-md-3">
            <div class="card green-color">
              <div class="card-body ">
                <h5 class="card-title text-center">Items of list A</h5>
                <p class="card-text">
                  {dataA && dataA.map((dataA) => <li>{dataA}</li>)}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card green-color">
              <div class="card-body">
                <h5 class="card-title   text-center">Items of list B</h5>
                <p class="card-text">
                  {dataB && dataB.map((dataB) => <li>{dataB}</li>)}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card green-color">
              <div class="card-body ">
                <h5 class="card-title text-center">
                  Items of both list A and B
                </h5>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card green-color">
              <div class="card-body ">
                <h5 class="card-title text-center">
                  Unique items in both lists
                </h5>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
