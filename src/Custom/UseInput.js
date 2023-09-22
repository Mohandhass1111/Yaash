import React from "react";
import useInputField from "./InputField";

function UseInput() {
  const [ChangedValue, Fieldchange, Reset] = useInputField("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    alert("I made of " + ChangedValue);
    Reset();
  };
  return (
    <form
      onSubmit={HandleSubmit}
      style={{
        backgroundColor: "slateblue",
        width: "500px",
        textAlign: "center",
        lineHeight: "2",
        padding: "7px",
        margin: "0 auto",
        borderRadius: "20px",
      }}
    >
      <label>
        <input
          type="text"
          value={ChangedValue}
          onChange={Fieldchange}
          placeholder="Enter the remains..."
          style={{
            padding: "3px",
            borderRadius: "5px",
            outline: "none",
            transition: "border-color 0.2s ease-in-out",
            marginRight: "6px",
            border: " 1px solid #ccc",
            textDecoration: "none",
          }}
        />
      </label>
      <button
        type="submit"
        style={{
          border: "none",
          color: "black",
          backgroundColor: "rgba(255, 255, 0, 0.9)",
          fontWeight: "bolder",
          padding: "3px 20px 3px 20px",
          marginLeft: "6px",
          borderRadius: "4px",
        }}
      >
        Click
      </button>
    </form>
  );
}

export default UseInput;
