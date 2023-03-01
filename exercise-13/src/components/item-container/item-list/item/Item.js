import "./Item.scss";
import { useDispatch } from "react-redux";
import {
  deleteTodoAction,
  editTodoAction,
  toggleTodoCompletedAction,
} from "../../../../redux/todoReducer";
import { useState } from "react";

function Item(props) {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(props.todo.text);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteTodoAction({ id }));
  }

  function handleEditSave(id) {
    dispatch(editTodoAction({ id, newText: editedText }));
    setEditMode(false);
  }

  function handleToggleCompleted(id, isCompleted) {
    dispatch(toggleTodoCompletedAction({ id, isCompleted }));
  }

  const todoClassName = props.todo.isCompleted
    ? "item-name-completed"
    : "item-name";

  return (
    <div className="item">
      <input
        type="checkbox"
        checked={props.todo.isCompleted}
        onChange={(e) => handleToggleCompleted(props.id, e.target.checked)}
      />
      {/* edit text field */}
      {editMode ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        
        />
      ) : (
        <div className={todoClassName}>{props.todo.text}</div>
      )}
      <button
        type="button"
        className="remove-btn"
        onClick={() => handleDelete(props.id)}
      >
        x
      </button>

      {/*Edit / Save Button */ }
      {editMode ? (
        <button
          type="button"
          className="save-btn"
          onClick={() => handleEditSave(props.id)}
        >
          Save
        </button>
      ) : (
        <button
          type="button"
          className="edit-btn"
          onClick={() => setEditMode(true)}
        >
          Edit
        </button>
      )}
    </div>
  );
}

export default Item;

