import React from "react";
import Hobby from "./Hobby";

const HobbyList = ({ name }) => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  return (
    <>
      <h1>{name}'s Hobbies</h1>
      <ul>
        {hobbies.map((h, i) => (
          <Hobby key={`hobbies_${i}`} hobby={h} />
        ))}
      </ul>
    </>
  );
};

export default HobbyList;
