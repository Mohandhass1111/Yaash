import React, { useEffect, useState } from "react";

function Effect1() {
  const [Emoji, setEmoji] = useState("❤️");
  useEffect(() => {
    const Interval = setInterval(() => {
      const emojis = [
        "😁",
        "🤩",
        "😅",
        "😍",
        "😎",
        "🥳",
        "😻",
        "✌🏻",
        "🤝",
        "💚",
        "🤍",
        "💛",
        "🧡",
      ];
      const ShowEmoji = Math.floor(Math.random() * emojis.length);
      setEmoji(emojis[ShowEmoji]);
    }, 2000);
    return () => clearInterval(Interval);
  });
  return (
    <div
      style={{
        backgroundColor: "black",
        fontFamily: "mooli",
        width: "50px",
        height: "50px",
        borderRadius: "10px",
        textAlign: "center",
        margin: "0 auto",
        fontSize: "16px",
        marginBottom: "5px",
        border: "2px solid red",
      }}
    >
      <p style={{ display: "inline-block" }}>
        <span
          style={{
            fontWeight: "bold",
            fontFamily: "sans-serif",
            fontSize: "2em",
          }}
        >
          {Emoji}
        </span>{" "}
      </p>
    </div>
  );
}

export default Effect1;
