import "./Header.scss";
import { useDispatch } from "react-redux";
import { searchTodoAction } from "../../redux/searchReducer";
import { useRef } from "react";

function Header() {
  const searchRef = useRef();

  const dispatch = useDispatch();

  const handleSearchTextChange = (event) => {
    const text = searchRef.current.value;
    dispatch(searchTodoAction(text));
  };

  return (
    <header className="header">
      <div className="heading">Item Lister</div>
      <input
        type="search"
        placeholder="Search items..."
        className="search-box"
        ref={searchRef}
        onChange={handleSearchTextChange}
      ></input>
    </header>
  );
}

export default Header;
