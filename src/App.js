import react from "react";
import Navbar from "./Component/Navbar";
import BookContextProvider, {BookContext} from "./context/BookContext";
import "./App.css";
import BookList from "./Component/BookList";
import BookForm from "./Component/BookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider >
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
