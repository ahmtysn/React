import React from "react";

export default function Button({ onChange }) {
  return (
    <div>
      <button className="btn" onClick={onChange}>
        Get a dog!
      </button>
    </div>
  );
}
