import './App.scss';
import { useState } from 'react';

import Header from './components/header/Header';
import ItemContainer from './components/item-container/ItemContainer';
import ItemContextProvider from './context/ItemContextProvider';

/**
 The main component of the application.
It renders the Header and ItemContainer components and provides the ItemContextProvider.
@returns The App component.
 */

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchTerm = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <ItemContextProvider>
      <Header onSearchTerm={handleSearchTerm} />
      <ItemContainer searchTerm={searchTerm} />
      </ItemContextProvider>
    </div>
  );
}

export default App;
