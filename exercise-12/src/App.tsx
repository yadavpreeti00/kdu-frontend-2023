import "./App.scss";
import Header from "./components/header/Header";
import ItemContainer from "./components/item-container/ItemContainer";
import ItemContextProvider from "./context/ItemContextProvider";

/**
 The main component of the application.
It renders the Header and ItemContainer components and provides the ItemContextProvider.
@returns The App component.
 */

function App() {
  return (
    <div className="App">
      <ItemContextProvider>
        <Header />
        <ItemContainer />
      </ItemContextProvider>
    </div>
  );
}

export default App;
