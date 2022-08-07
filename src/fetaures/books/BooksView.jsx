import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "./BookSlice";

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();
  console.log(books);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div>
      <h2>books views</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  <td title={id}>{id.slice(0, 10)}...</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to={"/edit-book"} state={{ id, title, author }}>
                      <button>edit</button>
                    </Link>

                    <button onClick={() => handleDelete(id)}>delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksView;
