import { useState } from "react";
import React from "react";

// NOTE: props are should be read only
function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Uppercase Converted", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lowercase Converted", "success");
  };

  const handleSentenceClick = () => {
    let newText = text
      .split(".") // Split text by periods
      .map((sentence) => {
        let trimmedSentence = sentence.trim(); //Removes all leading and trailing white-space characters
        return (
          trimmedSentence.charAt(0).toUpperCase() +
          trimmedSentence.slice(1).toLowerCase()
        );
      }) // Convert each sentence's first word to uppercase
      .join(". "); // Join sentences back with periods
    setText(newText);
    props.showAlert("Sentence Converted", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Cleared ", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div>
          <div className="mb-3"></div>
          <div className="mb-3">
            <h1>{props.heading}</h1>

            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              value={text}
              onChange={handleOnChange}
              placeholder="Enter text"
              style={{
                backgroundColor: props.mode === "dark" ? "#143058" : "white",
                // backgroundColor: props.color ? "dark" : "white", - Don't use this, changeColor() cannot update while rendering app component this is against the react js rules
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
            <button
              className="btn btn-primary mx-1 my-1"
              onClick={handleUpClick}
              disabled={text.length === 0}
            >
              Convert to UpperCase
            </button>
            <button
              className="btn btn-primary  mx-1 my-1"
              onClick={handleLowClick}
              disabled={text.length === 0}
            >
              Convert to LowerCase
            </button>
            <button
              className="btn btn-primary  mx-1 my-1"
              onClick={handleSentenceClick}
              disabled={text.length === 0}
            >
              Sentence Case
            </button>
            <button
              className="btn btn-primary  mx-1 my -1"
              onClick={handleClear}
              disabled={text.length === 0}
            >
              Clear all
            </button>

            {/* copy all text */}
            <button
              className="btn btn-primary  mx-1 my -1"
              onClick={handleCopy}
              disabled={text.length === 0}
            >
              Copy text
            </button>
          </div>
        </div>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Text Summary</h2>
        <p>
          {/* {text.split(/\s+/).filter((word) => word.length > 0).length} */}
          {
            text.split(/\s+/).filter((word) => word.length !== 0).length
          } words, {text.length} {""}
          Characters
        </p>
        {/* <p>{0.008 * text.split(" ").length} Minutes to read</p> */}
        <p>
          {0.008 * text.split(" ").filter((word) => word.length !== 0).length}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}

export default TextForm;
