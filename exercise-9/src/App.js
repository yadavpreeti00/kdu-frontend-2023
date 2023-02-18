
import './App.scss';
import { useState } from 'react';

import Header from './components/header/Header';
import ItemContainer from './components/item-container/ItemContainer';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTerm = (term) => {
    setSearchTerm(term);
  };
  
  return (
    <div className="App">
    <Header  onSearchTerm={handleSearchTerm}/>
    <ItemContainer searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
