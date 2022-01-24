import react from "react";
import {useContext} from "react/cjs/react.development";
import {BookContext} from "../context/BookContext";

const BookDetails = ({book}) => {
  const {removeBook} = useContext(BookContext);
  return (
    <li onClick={() => removeBook(book.id)}>
      <div> {book.title} </div> <div> {book.author}</div>{" "}
    </li>
  );
};

export default BookDetails;
