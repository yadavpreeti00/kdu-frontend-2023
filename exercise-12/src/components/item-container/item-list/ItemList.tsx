import "./ItemList.scss";
import Item from "./item/Item";
import ItemContext from "../../../context/ItemContext";
import React, { useContext } from "react";

interface ItemContextType {
  todoList: string[];
  handleDelete: (index: number) => void;
  searchTerm: string;
}

function ItemList() {
  const itemContext = useContext<ItemContextType>(ItemContext);

  const { todoList, handleDelete, searchTerm } = itemContext;

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
          <Item key={index} todo={todo} onDelete={() => handleDelete(index)} />
        ))
      )}
    </div>
  );
}

export default ItemList;
