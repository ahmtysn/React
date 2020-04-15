import React from "react";

export default function Button({ onClick }) {
  return (
    <div>
      <button className="btn" onClick={onClick}>
        Get a friend!
      </button>
    </div>
  );
}

// const btnStyle = {
//   color: "#fff",
//   background: "#333",
//   padding: 10,
//   border: "none",
// };
