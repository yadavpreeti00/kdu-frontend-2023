import "./ItemList.scss";
import Item from "./item/Item";
import React from "react";

interface ItemListProps {
  todoList: string[];
  onDelete: (index: number) => void;
  searchTerm: string;
}
/**
 * Displays a list of items and filters them based on a search term.
 * @param {Object} props - The component props.
 * @param {string[]} props.todoList - An array of items to display.
 * @param {function} props.onDelete - A function to call when an item is deleted.
 * @param {string} props.searchTerm - The search term used to filter the items.
 * @returns {JSX.Element} A React element that displays the item list.
 */
function ItemList({ todoList, onDelete, searchTerm }: ItemListProps) {
  const filteredList = todoList.filter((todo) =>
    todo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="itemList">
      <div className="heading">Items</div>
      {filteredList.length === 0 && searchTerm.length > 0 ? (
        <div className="no-match">No Match found</div>
      ) : (
        filteredList.map((todo, index) => (
          <Item key={index} todo={todo} onDelete={() => onDelete(index)} />
        ))
      )}
    </div>
  );
}

export default ItemList;
