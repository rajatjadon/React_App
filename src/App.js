import "./App.css";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";

function App() {
  return (
    <>
      <Navbar />
      {/* <Navbar title="React App" about='About React'/> */}
      <div className="container">
        <TextArea heading="Enter your Text below"/>
      </div>
    </>
  );
}

export default App;
