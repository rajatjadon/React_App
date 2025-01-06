import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
// import TextArea from "./Components/TextArea";

function App() {
  return (
    <>
      <Navbar />
      {/* <Navbar title="React App" about='About React'/> */}
      <div className="container">
        <TextArea heading="Enter your Text below"/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
