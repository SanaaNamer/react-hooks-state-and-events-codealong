import React, { useState } from "react";

function Toggle() {
  const [isButtonOn, setIsButtonOn] = useState(false);

  function handleClick() {
    setIsButtonOn((isOn) => !isOn);
  }

  const color = isButtonOn ? "red" : "white";

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isButtonOn ? "ON" : "OFF"}
    </button>
  );
}
export default Toggle;