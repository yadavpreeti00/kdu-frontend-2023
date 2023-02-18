import React, { useState } from "react";
import Form from "./form/Form.js";
import ItemList from "./item-list/ItemList.js";
import "./ItemContainer.scss";

function ItemContainer({ searchTerm }) {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (inputValue === "") {
      alert("Cannot insert empty data");
    } else {
      setTodoList([...todoList, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  return (
    <div className="item-container">
      <Form
        onFormSubmit={handleFormSubmit}
        onInputChange={(event) => setInputValue(event.target.value)}
        inputValue={inputValue}
      />
      <ItemList
        todoList={todoList.filter((item) => item.includes(searchTerm))}
        onDelete={handleDelete}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default ItemContainer;
