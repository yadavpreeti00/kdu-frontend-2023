import "./ItemList.scss";
import Item from "./item/Item.js";
import React from "react";

function ItemList({ todoList, onDelete, searchTerm }) {
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
