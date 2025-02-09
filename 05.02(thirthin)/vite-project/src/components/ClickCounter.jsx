import { useState, useRef, useEffect } from "react";

export default function ClickCounter() {
  const [clickCount, setClickCount] = useState(0);
  const buttonRef = useRef(null);

  function handleClick() {
    setClickCount(clickCount + 1);
  }



  useEffect(() => {
    setTimeout(() => {
      if (buttonRef.current !== null) {
        console.log(buttonRef);
        buttonRef.current.style.backgroundColor = "black";
      }
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Click Counter</h1>
      <p>Count: {clickCount}</p>
      <button ref={buttonRef}>+</button>



      {/* <label>
        First Name
        <input ref={firstNameInputRef} type="text" />
      </label>
      <label>
        Last Name
        <input type="text" />
      </label> */}
    </div>
  );
}
