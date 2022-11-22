import React from "react"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { AddPackages, BonusRequest, Change, Confirm, Dashboard, EditPackage, ErrorPage, InvestmentRequest, Investors, LandingPage, Login, Packages, Request, Settings, Subscription, Transaction, Users, WithdrawalRequest } from "./pages";
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
              path: "requests",
              element: <Request />,
              children: [

                {
                  index: true,
                  element: <BonusRequest />

                },

                {
                  path: "bonus",
                  element: <BonusRequest />

                },

                {
                  path: "withdrawal",
                  element: <WithdrawalRequest />

                },

                {
                  path: "investment",
                  element: <InvestmentRequest />

                }

              ]



            },

            {
              path: "package",
              children: [

                {
                  index: true,
                  element: <Packages />
                },
                {
                  path: "add",
                  element: <AddPackages />

                },
                {
                  path: "edit",
                  children: [
                    {
                      index: true,
                      element: <Packages />
                    },

                    {
                      path: ":id",
                      element: <EditPackage />
                    }
                  ]

                }
              ]

            },

            {
              path: "packages",
              children: [

                {
                  index: true,
                  element: <Packages />
                },

                {
                  path: "add",
                  element: <AddPackages />

                },

                {
                  path: "edit",
                  children: [
                    {
                      index: true,
                      element: <Packages />
                    },

                    {
                      path: ":id",
                      element: <EditPackage />
                    }
                  ]

                }
              ]

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
