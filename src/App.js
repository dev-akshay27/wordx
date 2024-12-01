import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import Alert from "./Alert";
import About from "./About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#143058";
      showAlert("Dark mode active", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode active", "success");
    }
  };

  const changeColor = (color) => {
    setMode(color);
    document.body.style.backgroundColor = color;
  };

  return (
    <>
      <Router>
        <Navbar
          title="MyNav"
          about="About us"
          cmmnts="cmmnts"
          mode={mode}
          toggleMode={toggleMode}
          changeColor={changeColor}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text Below"
                  mode={mode}
                  changeColor={changeColor}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
