import React from "react";
import "./App.css";
import HobbyList from "./components/HobbyList";
import Guarantee from "./components/Guarantee";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <HobbyList name="Ahmet" />
      <Guarantee
        img="./assets/chat.png"
        title="Online Support 24/7"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatem at totam minima eius maiores. Rerum aut autem laudantium voluptatem totam non sapiente ullam, unde, assumenda eaque tempora architecto deserunt."
      />
      <Guarantee
        img="./assets/coin.png"
        title="%100 Money Back"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatem at totam minima eius maiores. Rerum aut autem laudantium voluptatem totam non sapiente ullam, unde, assumenda eaque tempora architecto deserunt."
      />
      <Guarantee
        img="./assets/f-delivery.png"
        title="Free Shipping"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatem at totam minima eius maiores. Rerum aut autem laudantium voluptatem totam non sapiente ullam, unde, assumenda eaque tempora architecto deserunt."
      />
      <Counter />
    </div>
  );
}

export default App;
