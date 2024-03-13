import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Restaurant from "./component/Restaurant";
import store from "./utils/store";
import { Provider } from "react-redux";
import Cart from "./component/Cart";

const Container = () => {
  return (
    <Provider store={store}>
      <div className="w-full h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const routingConfiguration = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
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
        path: "/restaurant/:restid",
        element: <Restaurant />,
      },
    ],
    errorElement: <Error />,
  },
  ,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routingConfiguration} />);
