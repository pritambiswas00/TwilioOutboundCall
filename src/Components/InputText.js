import React from "react";

const InputText = (props) => {
  return (
    <div>
      <input
        type="tel"
        placeholder="Please enter number"
        value={props.number}
        onChange={props.handleNumberChange}
      />
    </div>
  );
};

export default InputText;
