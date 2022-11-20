import React from "react"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Change, Confirm, Dashboard, ErrorPage, Investors, LandingPage, Login, Packages, Settings, Subscription, Transaction, Users } from "./pages";
import ForgotPassword from "./pages/ForgotPassword";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <LandingPage />
        },

        {
          path: "home",
          element: <LandingPage />
        },

        {
          path: "login",
          element: <Login />
        },

        {
          path: "reset-password",
          element: <ForgotPassword />
        },

        {
          path: "confirm",
          element: <Confirm />
        },

        
        {
          path: "change",
          element: <Change />
        },

        {
          path: "account",
          element: <Users />,
          children: [


            {
              index: true,
              path: "",
              element: <Dashboard />

            },

            {
              path: "dashboard",
              element: <Dashboard />

            },

            {
              path: "subscription",
              element: <Subscription />

            },

            {
              path: "subscriptions",
              element: <Subscription />

            },

            {
              path: "transaction",
              element: <Transaction />

            },

            {
              path: "transactions",
              element: <Transaction />

            },

            {
              path: "setting",
              element: <Settings />

            },

            {
              path: "settings",
              element: <Settings />

            },

            {
              path: "package",
              element: <Packages />

            },

            {
              path: "packages",
              element: <Packages />

            },

            {
              path: "users",
              element: <Investors />

            },

            

          ]
        }

      ]
    },
  ]);



  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
