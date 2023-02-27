import React, { useState } from "react";
import ItemContext from "./ItemContext";

type ItemContextProviderProps = React.PropsWithChildren<{}>;

/**
 *
 * @param props
 * @returns ItemContextProvider component
 */
function ItemContextProvider(props: ItemContextProviderProps) {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");


  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue === "") {
      alert("Cannot insert empty data");
    } else {
      setTodoList([...todoList, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (index: number) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };
  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const term = event.target.value;
    setSearchTerm(term);
   // props.onSearchTerm(term);
  };

  const contextValue = {
    inputValue,
    setInputValue,
    todoList,
    handleFormSubmit,
    handleDelete,
    handleSearchTermChange,
    setSearchTerm,
    searchTerm
  };

  return (
    <ItemContext.Provider value={contextValue}>
      {props.children}
    </ItemContext.Provider>
  );
}

export default ItemContextProvider;
