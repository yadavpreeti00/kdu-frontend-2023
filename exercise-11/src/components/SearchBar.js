import React, { useRef, useEffect } from 'react';
import './searchBar.scss';

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef();

  useEffect(() => {
    const searchHandler = () => {
      onSearch(inputRef.current.value);
    };

    inputRef.current.addEventListener('input', searchHandler);

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('input', searchHandler);
      }
    };
  }, [onSearch]);

  return (
    <div className="search-bar">
    <input
      className='search-input'
      type="text"
      placeholder="Search.."
      ref={inputRef}
    />
    </div>
  );
};

export default SearchBar;
