// import React, { useState } from "react";

function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });

  let myStyle = {
    backgroundColor: props.mode === "dark" ? "#143058" : "white",
    color: props.mode === "dark" ? "white" : "black",
  };

  return (
    <div className="container">
      <h1 className="my-3" style={myStyle}>
        About Us
      </h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              WordX gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count, or anything else.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              WordX is a free character counter tool that provides instant
              character count and word count statistics for a given text.
              TextUtils reports the number of words and characters, making it
              suitable for writing text with word/character limits.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in all major web browsers, such
              as Chrome, Firefox, Internet Explorer, Safari, and Opera. It is
              ideal for counting characters in platforms like Facebook, blogs,
              books, Excel documents, PDF documents, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
