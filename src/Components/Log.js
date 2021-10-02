import React from "react";

const Log = (props) => {
  return (
    <div>
      <div className="log">{props.text}</div>
      <p>{props.smallText}</p>
    </div>
  );
};

export default Log;
