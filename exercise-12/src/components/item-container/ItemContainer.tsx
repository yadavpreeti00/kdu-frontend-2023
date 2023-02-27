import React, { useContext } from 'react';
import ItemContext from '../../context/ItemContext';
import Form from './form/Form';
import ItemList from './item-list/ItemList';
import './ItemContainer.scss';

interface ItemContextType {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  todoList: string[];
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleDelete: (index: number) => void;
}
interface ItemContainerProps {
  searchTerm: string;
}

function ItemContainer({ searchTerm }: ItemContainerProps) {
  const itemContext = useContext<ItemContextType>(ItemContext);
 

  const {
    inputValue,
    setInputValue,
    todoList,
    handleFormSubmit,
    handleDelete,
  } = itemContext;

  return (
    <div className="item-container">
      <Form
        onFormSubmit={handleFormSubmit}
        onInputChange={(event) => setInputValue(event.target.value)}
        inputValue={inputValue}
      />
      <ItemList
        todoList={todoList.filter((item) =>
          item.includes(searchTerm.toLowerCase())
        )}
        onDelete={handleDelete}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default ItemContainer;
