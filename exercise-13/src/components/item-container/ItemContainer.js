import React from "react";
import Form from "./form/Form.js";
import ItemList from "./item-list/ItemList.js";
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
