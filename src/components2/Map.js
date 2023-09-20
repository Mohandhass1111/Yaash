import React from "react";

const arr = [1, 2, 3, 4, 5, 6];

const Triple = (x) => {
  return x * 3;
};

const MapFunc = () => {
  // Use the map function to triple each element
  return (
    <div>
      <h3>Tripled Array: {arr.map(Triple)}</h3>
    </div>
  );
};

export default MapFunc;
