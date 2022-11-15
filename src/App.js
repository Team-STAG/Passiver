import React from "react"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Dashboard, ErrorPage, LandingPage, Users } from "./pages";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "home",
          element: <LandingPage />
        },

        {
          path: "account",
          element: <Users />,
          children: [

            {
              path: "dashboard",
              element: <Dashboard />

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
