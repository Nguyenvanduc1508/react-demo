import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Introduce from "../pages/Introduce/Introduce";
import App from "../App";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import Product from "../pages/Product/Product";
import Details from "../pages/Product/Details/Details";
import DetailsBlog from "../pages/Blogs/Details/DetailsBlog";
import SignUp from "../authentication/Register/SignUp";
import SignIn from "../authentication/Login/SignIn";
import Cart from "../pages/Cart/Cart";
import Pay from "../pages/Cart/Pay";

const Router: React.FunctionComponent = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/introduce",
          element: <Introduce />,
        },
        {
          path: "/products",
          element: <Product />,
        },
        {
          path: "/products/:id",
          element: <Details />,
        },
        {
          path: "/blog",
          element: <Blogs />,
        },
        {
          path: "/blog/:id",
          element: <DetailsBlog />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/pay",
          element: <Pay />,
        },
      ],
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
