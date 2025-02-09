import { useState } from "react";
import BadComponent from "./components/BadComponent";
import ClickCounter from "./components/ClickCounter";
import FleeButton from "./components/FleeButton";
import Modal from "./components/Modal";
import ScrollBox from "./components/ScrollBox";
import Timer from "./components/Timer";
import TimerUseState from "./components/TimerUseState";
import VisibilityChange from "./components/VisibilityChange";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/hide
      </button>
      {show && <VisibilityChange />}
      <BadComponent />
      <hr />
      <Modal>
        <h1>Modal Content</h1>
        <p>This is the content of the modal.</p>
        <button
          onClick={() => {
            console.log("Yes clicked");
          }}
        >
          Yes
        </button>
      </Modal>
      <Timer />
      <hr />
      <TimerUseState />
      <hr />
      <FleeButton />
      <ClickCounter />
      <ScrollBox />
    </div>
  );
}

export default App;
