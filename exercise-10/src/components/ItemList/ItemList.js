import React, { useState } from "react";
import Item from "./item/Item";
import data from "../data/data.js";
import "./ItemList.scss";

const items = data;

function ItemList() {
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const filteredItems = filter
    ? items.filter((item) => item.season === filter)
    : items;

  const sortedItems = sortOrder
    ? filteredItems
        .slice()
        .sort((a, b) =>
          sortOrder === "ascending" ? a.price - b.price : b.price - a.price
        )
    : filteredItems;

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="filter">Filter by jacket type:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="">All jackets</option>
          <option value="Summer">Summer Jacket</option>
          <option value="Winter">Winter Jacket</option>
          <option value="Spring">Spring Jacket</option>
          <option value="Autumn">Autumn Jacket</option>
        </select>
      </div>
      <div>
        <label htmlFor="sort-order">Sort by price:</label>
        <select
          id="sort-order"
          value={sortOrder}
          onChange={handleSortOrderChange}
        >
          <option value="">No sorting</option>
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </select>
      </div>
      <div className="item-grid">
        {sortedItems.map((item) => (
          <Item
            key={item.season + item.price}
            imageSource={item.imgSrc}
            season={item.season}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
