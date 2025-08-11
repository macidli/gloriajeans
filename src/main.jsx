import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";

import App from "./App.jsx";
import HomeLayout from "../layout/HomeLayout.jsx";
import MenuLayout from "../layout/MenuLayout.jsx";
import OurStoryLayout from "../layout/OurStoryLayout.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeLayout />, 
      },
       {
        path: "/menu",
        element: <MenuLayout />, 
      },
      {
        path: "/about",
        element:<OurStoryLayout />
      }


    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
