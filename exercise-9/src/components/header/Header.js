import "./Header.scss";
import { useState } from "react";

function Header(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    props.onSearchTerm(term);
  };
  console.log(searchTerm);

  return (
    <header className="header">
      <div className="heading">Item Lister</div>
      <input
        type="search"
        placeholder="Search items..."
        className="search-box"
        value={searchTerm}
        onChange={handleSearchTermChange}
      ></input>
    </header>
  );
}

export default Header;
