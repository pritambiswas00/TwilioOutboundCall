import React from "react";

const CallButton = (props) => {
  return (
    <button
      className={
        "btn btn-circle btn-success " +
        (props.onPhone ? "btn-danger" : "btn-success")
      }
      onClick={props.handleOnClick}
      disabled={props.disabled}
    >
      <i
        className={
          "fa fa-fw fa-phone " + (props.onPhone ? "fa-close" : "fa-phone")
        }
      ></i>
    </button>
  );
};

export default CallButton;
