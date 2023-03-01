import "./ItemList.scss";
import Item from "./item/Item.js";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function ItemList() {
  const [filteredTodos, setFilteredTodos] = useState([]);

  const todos = useSelector((state) => state.todo.todos);
  const searchText = useSelector((state) => state.search.searchText);

  useEffect(() => {
    const filtered = todos.filter((todo) => todo.text.includes(searchText));
    setFilteredTodos(filtered);
  }, [todos, searchText]);

  return (
    <div className="itemList">
      <div className="heading">Items</div>
      {filteredTodos.length === 0 && searchText.length > 0 ? (
        <div className="no-match">No Match found</div>
      ) : (
        filteredTodos.map((todo, index) => (
          <Item key={index} todo={todo} id={index} />
        ))
      )}
    </div>
  );
}

export default ItemList;
