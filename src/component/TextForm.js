import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase fired" );
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLoClick = () => {
    // console.log("lowercase fired" );
    let newtext2 = text.toLowerCase();
    setText(newtext2);
  };
  const handleObject = (event) => {
    // console.log("change text fired");
    setText(event.target.value);
  };
  const [text, setText] = useState("enter the text");
  return (
    <>
      <div className="container">
        <div className="form-group my-4">
          <h1>{props.heading}</h1>
          <textarea style = {{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
            className="form-control"
            onChange={handleObject}
            value={text}
            id="myBox"
            rows="15"
          ></textarea>
          <button onClick={handleUpClick} className="btn btn-warning my-3 ">
            Convert To Uppercase
          </button>
          <button onClick={handleLoClick} className="btn btn-dark my-3 mx-3">
            Convert To Lowercase
          </button>
        </div>
      </div>
      <div className="container" style = {{color:props.mode==='dark'?'white':'black'}}>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length } minutes to read</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
