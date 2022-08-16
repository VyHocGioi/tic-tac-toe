import React, { useState } from "react";
import "./ToggleStyle.css";
//stateless
// function Toggle() {
//   return <div className="toggle"></div>;
// }

//statefull

function Toggle() {
  const [on, setOn] = useState(false);
  console.log(on);
  const handleToggle = () => {
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {on ? "On" : "Off"}
      <div className="toggle-control">
        {/* <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div> */}
      </div>
    </div>
  );
}

export default Toggle;
