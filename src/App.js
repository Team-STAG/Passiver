import React from "react"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { ErrorPage, LandingPage } from "./pages";


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
