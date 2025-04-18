import React from "react";

import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ListedBook from "../Pages/LIstedBook/LIstedBook";
import PageToRead from "../Pages/PageToRead/PageToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
    {
        index: true,
        path: "/",
        loader: ()=> fetch('booksData.json'),
        Component: Home
    },
    {
      path: "/about",
      Component: About
    },
    {
      path : "/listedBook",
      loader: ()=> fetch('booksData.json'),
      Component: ListedBook,
    },
    {
      path: "/bookDetails/:id",
      loader: ()=> fetch('booksData.json'),
      Component: BookDetails
    },
    {
      path: "/pageToRead",
      loader: ()=> fetch('booksData.json'),
      Component: PageToRead
    }
],
  },
]);
