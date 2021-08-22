import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./InputBox.css";

const InputBox = () => {
  const { register, handleSubmit } = useForm();
  const [dataA, setDataA] = useState(null);
  const [dataB, setDataB] = useState(null);
  const [uniqueA, setUniqueA] = useState(null);
  const [uniqueB, setUniqueB] = useState(null);
  const [commonItem, setCommonItem] = useState(null);

  const onSubmit = (data) => {
    const InputA = data.inputA.split(" ");
    setDataA(InputA);
    const InputB = data.inputB.split(" ");
    setDataB(InputB);
    // common items in both list
    let c = InputA.filter((value) => InputB.includes(value));
    setCommonItem(c);
    //difference between a and b
    let a = new Set(InputA);
    let b = new Set(InputB);
    let differenceA = [...InputA].filter((x) => !b.has(x));
    setUniqueA(differenceA);
    let differenceB = [...InputB].filter((y) => !a.has(y));
    setUniqueB(differenceB);
  };

  return (
    <div className="input-container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 form-container green-color">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="mb-3">
                <label className="form-label">First Input</label>
                <input
                  name="inputA"
                  type="text"
                  className="form-control"
                  placeholder="Enter texts/numbers/characters"
                  ref={register({ required: true })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Second Input</label>
                <input
                  name="inputB"
                  type="text"
                  placeholder="Enter texts/numbers/characters"
                  className="form-control"
                  ref={register({ required: true })}
                />
              </div>
              <input type="submit" className="btn brown-color text-white " />
            </form>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-md-3">
            <div className="card green-color">
              <div className="card-body ">
                <h5 className="card-title text-center">Items of list A</h5>
                <p className="card-text">
                  {dataA && dataA.map((dataA) => <li>{dataA}</li>)}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card green-color">
              <div className="card-body">
                <h5 className="card-title   text-center">Items of list B</h5>
                <p className="card-text">
                  {dataB && dataB.map((dataB) => <li>{dataB}</li>)}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card green-color">
              <div className="card-body ">
                <h5 className="card-title text-center">
                  Items of both list A and B
                </h5>
                <p className="card-text">
                  {commonItem &&
                    commonItem.map((commonItem) => <li>{commonItem}</li>)}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card green-color">
              <div className="card-body ">
                <h5 className="card-title text-center">
                  Unique items in both lists
                </h5>
                <p className="card-text">
                  {uniqueA && uniqueA.map((uniqueA) => <li>{uniqueA}</li>)}
                  {uniqueB && uniqueB.map((uniqueB) => <li>{uniqueB}</li>)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
