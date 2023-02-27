import "./Header.scss";
import { useContext } from "react";
import ItemContext from "../../context/ItemContext";

function Header() {
  const { searchTerm, handleSearchTermChange } = useContext(ItemContext);
  return (
    <header className="header">
      <div className="heading">Item Lister</div>
      <input
        type="search"
        placeholder="Search items..."
        className="search-box"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </header>
  );
}

export default Header;
