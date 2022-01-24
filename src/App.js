import react from "react";
import Navbar from "./Component/Navbar";
import BookContextProvider, {BookContext} from "./context/BookContext";
import "./App.css";
import BookList from "./Component/BookList";

function App() {
  return (
    <div className="App">
      <BookContextProvider >
        <Navbar />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
