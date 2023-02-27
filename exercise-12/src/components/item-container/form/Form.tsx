import './Form.scss';
import React from 'react';


interface FormProps {
  onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

/**
Form component that allows users to add new items to the item list
@param onFormSubmit Function to handle form submission
@param onInputChange Function to handle changes in the input field
@param inputValue The current value of the input field
@returns A form that allows users to add new items to the item list
*/
function Form({ onFormSubmit, onInputChange, inputValue }: FormProps) {
  return (
    <div>
      <form onSubmit={onFormSubmit} className="form">
        <div className="heading">Add Items</div>
        <input
          type="text"
          className="input-field"
          value={inputValue}
          onChange={onInputChange}
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
