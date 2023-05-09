import React from "react";
import ReactDOM from "react-dom/client";

import { store } from "./redux/store.jsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Reason from "./pages/Reason";
import Dream from "./pages/Dream";
import Photo from "./pages/Photo";

const router = createBrowserRouter([
  {
    path: "react-kyiv",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "reason",
        element: <Reason />,
      },
      {
        path: "dream",
        element: <Dream />,
      },
      {
        path: "photo",
        element: <Photo />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);