import React from "react"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Dashboard, ErrorPage, LandingPage, Login, Packages, Settings, Subscription, Transaction, Users } from "./pages";


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

            }

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
