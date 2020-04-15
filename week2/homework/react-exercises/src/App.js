import React from "react";
import "./App.css";
import Friend from "./components/exe1/Friend";
import DogGallery from "./components/exe2/DogGallery";
import RandomJoke from "./components/exe3/RandomJoke";

function App() {
  return (
    <div className="App">
      <h1>hello guys...</h1>
      <Friend />
      <DogGallery />
      <RandomJoke />
    </div>
  );
}

export default App;
