import React from "react"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Dashboard, ErrorPage, LandingPage, Subscription, Transaction, Users } from "./pages";


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
