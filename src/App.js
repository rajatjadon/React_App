import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      {/* <Navbar title="React App" about='About React'/> */}
      <div className={`text-${mode === "light" ? "dark" : "light"} container`}>
        <TextArea
          heading="Enter your Text below"
          mode={mode}
          className={`text-${mode === "light" ? "dark" : "light"}`}
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
