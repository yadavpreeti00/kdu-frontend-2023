import "./Form.scss";
import React from "react";

function Form({ onFormSubmit, onInputChange, inputValue }) {
  return (
    <div>
      <form onSubmit={onFormSubmit} className="form">
        <div className="heading">Add Items</div>
        <input
          type="text"
          className="input-field"
          value={inputValue}
          onChange={onInputChange}
        ></input>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
