import React, { useRef } from "react";
import { Synth } from "tone";
import "./App.css";

function App() {
  let synth = new Synth().toMaster();
  const inputEl = useRef(null);

  const playTone = (e) => {
    switch (e.key) {
      case "d":
        return synth.triggerAttack("C4");
      case "r":
        return synth.triggerAttack("C#4");
      case "f":
        return synth.triggerAttack("D4");
      case "t":
        return synth.triggerAttack("D#4");
      case "g":
        return synth.triggerAttack("E4");
      case "h":
        return synth.triggerAttack("F4");
      case "u":
        return synth.triggerAttack("F#4");
      case "j":
        return synth.triggerAttack("G4");
      case "i":
        return synth.triggerAttack("G#4");
      case "k":
        return synth.triggerAttack("A4");
      case "o":
        return synth.triggerAttack("A#4");
      case "l":
        return synth.triggerAttack("B4");
      default:
        return;
    }
  };

  return (
    <div>
      <h1> Piano Player</h1>
      <h2> Use your keyboard to play the piano!</h2>
      <div id="app">
        <input
          ref={inputEl}
          id="piano-input"
          onKeyDown={playTone}
          onKeyUp={() => synth.triggerRelease()}
          onBlur={() => inputEl.current.focus()}
          autoFocus
        />

        <ul id="piano">
          <li className="key">
            <div className="black-key">R</div>D
          </li>
          <li className="key">
            <div className="black-key">T</div>F
          </li>
          <li className="key">G</li>
          <li className="key">
            <div className="black-key">U</div>H
          </li>
          <li className="key">
            <div className="black-key">I</div>J
          </li>
          <li className="key">
            <div className="black-key">O</div>K
          </li>
          <li className="key">L</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
