import React, { useState, useRef } from "react";

function Timewatch() {
  const [starttime, setstarttime] = useState(null);
  const [now, setnow] = useState(null);
  const intervalref = useRef(null);
  const Handlestart = () => {
    setstarttime(Date.now());
    clearInterval(intervalref.current);
    intervalref.current = setInterval(() => {
      setnow(Date.now());
    }, 10);
  };
  const Handlepause = () => {
    clearInterval(intervalref.current);
  };

  let Passedtime = 0;
  if (starttime != null && now != null) {
    Passedtime = (now - starttime) / 1000;
  }
  return (
    <div>
      <h3>Time passed:{Passedtime.toFixed(3)}</h3>
      <button onClick={Handlestart}>Start</button>
      <button onClick={Handlepause}>Pause</button>
    </div>
  );
}

export default Timewatch;
