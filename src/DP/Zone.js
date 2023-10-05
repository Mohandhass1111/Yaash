import React, { useState, useEffect } from "react";

function Zone() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []); // The empty array [] ensures this effect runs only once, similar to componentDidMount

  return (
    <div
      style={{
        backgroundColor: "black",
        textAlign: "center",
        width: "100px",
        margin: "0 auto",
        position: "absolute",
        top: "10px",
        right: "15px",
        color: "white",
        paddingLeft: "16px",
        paddingRight: "20px",
        paddingTop: "5px",
        paddingBottom: "5px",
        fontSize: "18px",
        fontFamily: "Arial",
      }}
    >
      {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
    </div>
  );
}

export default Zone;
