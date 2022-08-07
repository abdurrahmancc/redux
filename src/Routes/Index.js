import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Navbar from "../layout/Navbar";
import BooksView from "../fetaures/books/BooksView";
import AddBooks from "../fetaures/books/AddBooks";
import Footer from "../layout/Footer";
import EditBook from "../fetaures/books/EditBook";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/show-books" element={<BooksView />}></Route>
          <Route path="/edit-book" element={<EditBook />}></Route>
          <Route path="/add-books" element={<AddBooks />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Index;
