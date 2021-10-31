import React, { useState } from "react";
import ReactDOM from "react-dom";

const Exercise = () => {
  const [activeIndex, setIndex] = useState(0);
  const onButtonClick = () => {
    setIndex(activeIndex + 1);
  };
  return (
    <React.Fragment>
      <div>
        <button onClick={onButtonClick}>Click me</button>
      </div>
      <div>Button Clicks : {activeIndex}</div>
    </React.Fragment>
  );
};

export default Exercise;
