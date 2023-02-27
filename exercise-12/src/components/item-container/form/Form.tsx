import "./Form.scss";
import React, { useContext } from "react";
import ItemContext from "../../../context/ItemContext";

interface ItemContextType {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  todoList: string[];
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleDelete: (index: number) => void;
}

function Form() {
  const itemContext = useContext<ItemContextType>(ItemContext);

  const { inputValue, setInputValue, handleFormSubmit } = itemContext;

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="form">
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
