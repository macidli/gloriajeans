import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";

import App from "./App.jsx";
import Home from "./components/Main/pages/Home/Home.jsx";
import Menu from "./components/Main/pages/Menu/Menu.jsx";
import OurStoryM from "./components/Main/pages/OurStory/OurStroryM.jsx";
import Search from "./components/Main/pages/Search/Search.jsx";
import Login from "./components/Auth/Login.jsx";
import Recover from "./components/Auth/Recover.jsx";
import Signin from "./components/Auth/Signin.jsx";
import Shop from "./components/Main/pages/Shop/Shop.jsx";
import AllProducts from "./components/AllProducts/AllProducts.jsx";
import Details from "./components/AllProducts/Details.jsx";
import { BasketProvider } from "./components/Basket/BasketContext.jsx";
import Checkout from "../layout/Checkout/Checkout.jsx";




const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/about", element: <OurStoryM /> },
      { path: "/search", element: <Search /> },
      { path: "/login", element: <Login /> },
      { path: "/recover", element: <Recover /> },
      { path: "/signin", element: <Signin /> },
      { path: "/shop", element: <Shop /> },
      { path: "/all-products", element: <AllProducts /> },
      { path: "/details/:slug", element: <Details /> },
    ],
  },
   {
    path: "/checkout",
    element: <Checkout />, 
  },
  
]);

createRoot(document.getElementById("root")).render(
  <BasketProvider>
    <RouterProvider router={router} />
  </BasketProvider>
);
