import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBooks } from "./BookSlice";
import { v4 as uuidv4 } from "uuid";

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(), title: title, author: author };
    dispatch(addBooks(book));
    navigate("/show-books");
  };
  return (
    <div>
      <h2>add books</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title" className="">
            Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            id="author"
            required
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddBooks;
