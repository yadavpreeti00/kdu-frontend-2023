import React from "react";
import "./Item.scss";

interface ItemProps {
  todo: string;
  onDelete: () => void;
}
/**
Item component represents a single item in the todo list
@param {object} props - The props object containing todo and onDelete function
@param {string} props.todo - The todo item to be displayed
@param {function} props.onDelete - The function to be called when the delete button is clicked
@returns {JSX.Element} - The JSX element representing a single todo item
*/
const Item: React.FC<ItemProps> = ({ todo, onDelete }) => {
  return (
    <div className="item">
      <div className="item-name">{todo}</div>
      <button type="button" className="remove-btn" onClick={onDelete}>
        x
      </button>
    </div>
  );
};

export default Item;
