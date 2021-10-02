import React from "react";
import Twilio from "twilio-client";

const Tone = () => {
  const digitSend = (digit) => {
    Twilio.Device.activeConnection().sendDigits(digit);
  };

  return (
    <div className="keys">
      <div className="key-row">
        <button
          className="btn btn-circle btn-default"
          onClick={() => digitSend("1")}
        >
          1
        </button>
        <button
          className="btn btn-circle btn-default"
          onClick={() => digitSend("2")}
        >
          2<span>A B C</span>
        </button>
        <button
          className="btn btn-circle btn-default"
          onClick={() => digitSend("3")}
        >
          3<span>D E F</span>
        </button>
      </div>
      <div className="key-row">
        <button
          className="btn btn-circle btn-default"
          onClick={() => digitSend("4")}
        >
          4<span>G H I</span>
        </button>
        <button
          className="btn btn-circle btn-default"
          onClick={() => digitSend("5")}
        >
          5<span>J K L</span>
        </button>
        <button
          className="btn btn-circle btn-default"
          onClick={() => digitSend("6")}
        >
          6<span>M N O</span>
        </button>
      </div>
      <div className="key-row">
        <button
          className="btn btn-circle btn-default"
          onClick={() => digitSend("7")}
        >
          7<span>P Q R S</span>
        </button>
        <button
          className="btn btn-circle btn-default"
          onClick={() => digitSend("8")}
        >
          8<span>T U V</span>
        </button>
        <button
          className="btn btn-circle btn-default"
          onClick={() => digitSend("9")}
        >
          9<span>W X Y Z</span>
        </button>
      </div>
      <div className="key-row">
        <button
          className="btn btn-circle btn-default"
          onClick={() => digitSend("*")}
        >
          *
        </button>
        <button
          className="btn btn-circle btn-default"
          onClick={() => digitSend("0")}
        >
          0
        </button>
        <button
          className="btn btn-circle btn-default"
          onClick={() => digitSend("#")}
        >
          #
        </button>
      </div>
    </div>
  );
};

export default Tone;
