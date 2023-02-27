import React from "react";
import Form from "./form/Form";
import ItemList from "./item-list/ItemList";
import "./ItemContainer.scss";

function ItemContainer() {
  return (
    <div className="item-container">
      <Form />
      <ItemList />
    </div>
  );
}

export default ItemContainer;
