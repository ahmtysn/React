import React, { useState } from "react";
import Button from "./Button";
import Count from "./Count";

const Counter = () => {
  const [count, setCount] = useState(0);

  let feedback = count > 10 ? `It's higher than 10!` : "Keep counting...";
  return (
    <div>
      <h1>{feedback}</h1>
      <Button name="Add 1!" onClickHandler={() => setCount(count + 1)} />
      <Count number={count} />
    </div>
  );
};

export default Counter;
