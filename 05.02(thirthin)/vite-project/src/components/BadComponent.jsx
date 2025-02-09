import React, { useEffect } from "react";

// Так не делать! Лучше использовать useRef
export default function BadComponent() {
  useEffect(() => {
    const badButton = document.querySelector(".bad-button");
    badButton.addEventListener("click", () => {
      console.log("Bad button clicked");
    });

    return () => {
      badButton.removeEventListener("click", () => {
        console.log("Bad button clicked");
      });
    };
  }, []);

  return (
    <div>
      <p>I'm a bad, bad button</p>
      <button className="bad-button">Click me</button>
    </div>
  );
}
