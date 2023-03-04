import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useRef } from "react";
import "../scss/home.scss";
import { RootState } from "../redux/reduxStore";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../redux/reduxStore";
import { setCurrentCategory } from "../redux/currentDropDownSlice";
import { searchProduct } from "../redux/searchSlice";
import { Link } from "react-router-dom";
const logo=require("../images/kickdrum-text-logo.png");



export default function Home(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const currentCategory = useSelector((state: RootState) => state.currentCategory.currentCategory)

  const handleCategorySelect = (category: string) => {
    // setSelectedCategory(category);
    dispatch(setCurrentCategory(category));
  };
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearchTextChange = () => {
    const text = searchRef.current?.value;
    dispatch(searchProduct(text));
  };

  return (
    <div className="home">
      <div className="logo">
        <img className="logo-img" src={logo} alt="kickdrum" />
      </div>
      <div className="grid-container">
        <div className="dropdown">
          <button className="dropbtn">{currentCategory}</button>
          <div className="dropdown-content">
            {categories.map((category, index) => (
              <a
                key={index}
                className="dropdown-item"
                href="#"
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </a>
            ))}
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleCategorySelect("allCategories")}
            >
              All Categories
            </a>
          </div>
        </div>

        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search this blog"
            ref={searchRef}
          ></input>
          <button className="search-btn" onClick={handleSearchTextChange}>
          <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="home-cart">
          <Link to="/cart">
            <button className="home-cart-btn"><FontAwesomeIcon icon={faShoppingCart} /> CART</button>
          </Link>
        </div>
      </div>

      <div className="headline">Start Shopping Your Favourite Brands</div>
    </div>
  );
}
