import React, { useState } from "react";

export default function TextArea(props) {
  const handleOnClick = () => {
    //   console.log(text)
    setText(text.toUpperCase());
  };
  const handleOnLoClick = () => {
    //   console.log(text)
    setText(text.toLowerCase());
  };
  const handleOnReplaceClick = () => {
    //   console.log(text)
    setText(text.replaceAll(text,''));
  };
  const handleOnchange = (event) => {
    // console.log(text)
    setText(event.target.value);
  };
  const [text, setText] = useState("");

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
        <button className="btn btn-primary my-4 mx-2" onClick={handleOnClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary my-4 mx-2" onClick={handleOnLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary my-4 mx-2" onClick={handleOnReplaceClick}>
          Replace Text
        </button>
      </div>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words {text.length} Characters
        </p>
        <p>{0.08 * text.split(" ").length} minutes read</p>
        <h2>Preview Text</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
