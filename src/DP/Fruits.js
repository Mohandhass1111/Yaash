import React, { useState } from "react";

function Fruits() {
  const [fruit, setFruit] = useState(""); // State for the input field
  const [items, setItems] = useState([]); // State for storing fruits

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setItems([...items, fruit]); // Add the entered fruit to the 'items' state
    setFruit(""); // Clear the input field by resetting the 'fruit' state
  };

  return (
    <div style={{ backgroundColor: "gold" }}>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter your fav fruits:"
          onChange={(e) => setFruit(e.target.value)}
          value={fruit} // Bind the input field value to the 'fruit' state
        />
        <button type="submit">Submit</button>
      </form>
      <p>Your favorite fruits:</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
