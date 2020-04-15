import React from "react";

export default function Joke({ setup, punchline }) {
  return (
    <div style={{ color: "blue", marginTop: "50px" }}>
      <p>{setup}</p>
      <p>{punchline}</p>
    </div>
  );
}
