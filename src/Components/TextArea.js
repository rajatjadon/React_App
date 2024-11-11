import React, { useState } from "react";

export default function TextArea(props) {
  const handleOnClick = () => {
    //   console.log(text)
    setText(text.toUpperCase());

  };
  const handleOnchange = (event) => {
    // console.log(text)
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text here");

  return (
    <>
      <div className="mb-3 my-3">
        <h1>{props.heading}</h1>
        <textarea
          value={text}
          onChange={handleOnchange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-4" onClick={handleOnClick}>
          Convert To Uppercase
        </button>
      </div>
    </>
  );
}
