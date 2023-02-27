import "./Header.scss";
import { useState } from "react";

interface HeaderProps {
  onSearchTerm: (term: string) => void;
}

/**
Header component for Item Lister application
@param {object} props - The props object containing the onSearchTerm function
@param {function} props.onSearchTerm - The function to be called when the search term changes
@returns {JSX.Element} - The JSX element representing the header component
**/
function Header(props: HeaderProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  
/**
Handler function to be called when the search term changes
@param {object} event - The event object generated by the search input field
*/
  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const term = event.target.value;
    setSearchTerm(term);
    props.onSearchTerm(term);
  };

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
