import react, {useContext, useState} from "react";
import {BookContext} from "../context/BookContext";

const BookForm = () => {
  const {addBook} = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
          value={title}
        />
        <input
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="author"
          value={author}
        />
        <input type="submit" value="add book" />
      </form>
      <div> </div>
    </>
  );
};

export default BookForm;
