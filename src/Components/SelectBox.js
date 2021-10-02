import React from "react";

const SelectBox = (props) => {
  const option = props.countries.map((country) => {
    const flag = "flag flag-" + country.code;
    return (
      <li>
        <a href="#" onClick={() => props.handleOnChange(country.cc)}>
          <div className={flag}></div>
          <span>
            {" "}
            {country.name} (+{country.cc})
          </span>
        </a>
      </li>
    );
  });

  return (
    <div className="input-group-btn">
      <button
        type="button"
        className="btn btn-default dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        +<span className="country-code">{props.countryCode}</span>
        <i className="fa fa-caret-down"></i>
      </button>
      <ul className="dropdown-menu">{option}</ul>
    </div>
  );
};

export default SelectBox;
