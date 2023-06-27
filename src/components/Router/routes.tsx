import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
import Kyiv from "../../pages/Kyiv";
import Reason from "../../pages/Reason";
import Dream from "../../pages/Dream";
import Photo from "../../pages/Photo";
import ErrorComponent from "../ErrorComponent";

export const router = createBrowserRouter([
  {
    path: "react-kyiv",
    // react-kyiv
    element: <App />,
    children: [
      {
        index: true,
        element: <Kyiv />,
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
      {
        path: "*",
        element: <ErrorComponent />,
      },
    ],
  },
]);
