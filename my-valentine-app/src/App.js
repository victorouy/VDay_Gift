import React, { useState } from "react";
import "./App.css";

function App() {
  let [yesCount, setYesCount] = useState(0);
  let [noCount, setNoCount] = useState(0);
  let [yesCurrently, setYesCurrently] = useState(true);
  let [yesButtonSize, setYesButtonSize] = useState(1);
  let [noButtonOffset, setNoButtonOffset] = useState(0);

  const handleYesClick = () => {
    setYesCount(yesCount + 1);
    setNoCount(0);
    setYesCurrently(true);
    setYesButtonSize(1);
    // Move No button further right
    setNoButtonOffset(0);
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setYesCount(0);
    setYesCurrently(false);
    setYesButtonSize(yesButtonSize + 0.15);
    // Reset No button position
    setNoButtonOffset((prev) => prev + 10);
  };

  // Determine the title based on the current state
  const getTitle = () => {
    console.log("changing title");
    if (yesCurrently === true) {
      if (yesCount === 0) {
        return "hi pres! do you want to be my valentine? (it would make me a really happy boi)";
      } else if (yesCount === 1) {
        return "are you sure you wanna choose ME as ur valentine this year?";
      } else if (yesCount === 2) {
        return "how sure are you really?";
      } else if (yesCount === 3) {
        return "ok well this is ur last chance to say no";
      } else if (yesCount === 4) {
        return "jk that wasn't your last chance to say no. maybe now it is";
      } else if (yesCount === 5) {
        return "omg no way ur so close to being my valentine day girlie";
      } else {
        return "YAY! thank you for being my valentine :) ily <3";
      }
    } else {
      if (noCount === 1) {
        return "lool... i think you misclicked there";
      } else if (noCount === 2) {
        return "wait what!? you can't be serious";
      } else if (noCount === 3) {
        return "babe don't do this...";
      } else if (noCount === 4) {
        return "ok fine. i don't even care";
      } else if (noCount === 5) {
        return "PLEASE NOO! I DO CARE";
      } else if (noCount === 6) {
        return "pres... ur breaking my heart";
      } else if (noCount === 7) {
        return "I PROMISE I'LL PAY FOR THE DINNER";
      } else {
        return "meow meow meow meowwww";
      }
    }
  };

  // Buttons are disabled if noCount is 8 or more, or yesCount is 6 or more
  const buttonsDisabled = noCount >= 8 || yesCount >= 6;

  return (
    <div className="App">
      <h1>{getTitle()}</h1>

      {/* Initial image: Only displayed before any button is clicked */}
      {yesCount === 0 && noCount === 0 && (
        <div className="initial-gif-container">
          <img
            alt="initial gif"
            src="https://gifdb.com/images/high/bear-love-bouncing-mocha-with-flowers-n4m0fyne6h4e6y2x.webp"
          />
        </div>
      )}

      <button
        className="yes-button"
        onClick={handleYesClick}
        disabled={buttonsDisabled}
        style={{
          transform: `scale(${yesButtonSize})`,
        }}
      >
        Yes
      </button>
      <button
        className="no-button"
        onClick={handleNoClick}
        disabled={buttonsDisabled}
        style={{
          transform: `translateX(${noButtonOffset}px)`,
        }}
      >
        No
      </button>

      {/* Render the GIF below the buttons when they are disabled */}
      {buttonsDisabled && (
        <div className="gif-container">
          {yesCount >= 6 ? (
            <img
              alt="happy valentine gif"
              src="https://gifdb.com/images/high/tomato-as-heart-happy-valentines-upt6jnmfvce6wktk.webp"
            />
          ) : (
            <img
              alt="sad cat"
              src="https://gifdb.com/images/high/teardrops-tiny-little-kitten-cat-crying-7bob1j0lmbaevnlf.webp"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
