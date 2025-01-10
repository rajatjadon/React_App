import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode Enabled", "success");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      showAlert("Light Mode Enabled", "success");
      document.body.style.backgroundColor = "white";
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className={`text-${mode === "light" ? "dark" : "light"} container`}>
        <TextArea
          heading="Enter your Text below"
          mode={mode}
          showAlert={showAlert}
          className={`text-${mode === "light" ? "dark" : "light"}`}
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
