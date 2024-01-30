import React, { Suspense, lazy, useEffect, useState } from "react";
import reactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
//import Grocery from "./components/Grocery";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const [userName, setUserName] = useState();
  //Authentication
  useEffect(() => {
    //make an api call and send user name and password

    const data = {
      name: "Suchita Gunaga",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
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
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
