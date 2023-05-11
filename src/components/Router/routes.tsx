import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
import Kyiv from "../../pages/Kyiv";
import Reason from "../../pages/Reason";
import Dream from "../../pages/Dream";
import Photo from "../../pages/Photo";

export const router = createBrowserRouter([
  {
    path: "react-kyiv",
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
    ],
  },
]);
