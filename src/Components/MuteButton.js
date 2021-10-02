import React from "react";

const MuteButton = (props) => {
  return (
    <button
      className="btn btn-circle btn-default"
      onClick={props.handleOnClick}
    >
      <i
        className={
          "fa fa-fw fa-microphone " +
          (props.muted ? "fa-microphone-slash" : "fa-microphone")
        }
      ></i>
    </button>
  );
};

export default MuteButton;
