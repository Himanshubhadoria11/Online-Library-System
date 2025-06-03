import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Provider } from "react-redux";
import {Provider} from "react-redux";
import store from "./redux/store.js";



import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import BrowseBooksPage from "./pages/BrowseBooksPage.jsx";
import AddBookPage from "./pages/AddBookPage.jsx";
import BookDetailsPage from "./pages/BookDetailsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import "./index.css";
import RemoveBook from "./pages/RemoveBook.jsx";

//  import App from "./App.jsx";
// import "./index.css";
// import HomePage from "./pages/HomePage.jsx";
// import NotFoundPage from "./pages/NotFoundPage.jsx";
// import AddBookPage from "./pages/AddBookPage.jsx";
// import BrowseBooksPage from "./pages/BrowseBooksPage.jsx";

const routers = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/browse-books",
        element: <BrowseBooksPage />,
        children: [
          {
            path: "/browse-books/:category",
            element: <BrowseBooksPage />,
          },
        ],
      },


      //   {
      //   path: "/add-book",
      //   element: <AddBookPage/>,
      //   children: [
      //     {
      //       path: "/book-details/:id",
      //       element: < BookDetailsPage/>,
      //     },
      //   ],
      // },

      //  {
      //   path: "/remove-book",
      //   element: <RemoveBook/>,
      //   children: [
      //     {
      //       path: "/book-details/:id",
      //       element: < BookDetailsPage/>,
      //     },

       {
        path: "/add-book",
        element: <AddBookPage />,
      },
      {
        path: "/remove-book",
        element: <RemoveBook />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetailsPage />,
      },
        ],
    //   },
    // ],
    errorElement: <NotFoundPage />,
  },
];

const appRouter = createBrowserRouter(routers);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
