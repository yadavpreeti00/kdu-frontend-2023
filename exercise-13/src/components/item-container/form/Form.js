import "./Form.scss";
import React from "react";
import { useDispatch } from "react-redux";
import {
  addTodoAction,
  deleteCompletedTodosAction,
} from "../../../redux/todoReducer";
import { useRef } from "react";

function Form() {
  const dispatch = useDispatch();

  const itemRef = useRef("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodoAction({ text: itemRef.current.value }));
    itemRef.current.value ="";
  };

  const handleDeleteCompleted = (event) => {
    event.preventDefault();
    dispatch(deleteCompletedTodosAction());
  };

  return (
    <div>
      <div className="form">
        <div className="heading">Add Items</div>
        <input
          type="text"
          ref={itemRef}
          className="input-field"
          name="todoText"
        />
        <button type="submit" className="submit-btn" onClick={handleFormSubmit}>
          Submit
        </button>
        <button
          type="submit"
          className="submit-btn"
          onClick={handleDeleteCompleted}
        >
          Delete Completed ToDos
        </button>
      </div>
    </div>
  );
}

export default Form;
