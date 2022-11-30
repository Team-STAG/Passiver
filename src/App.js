import React from "react"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { AddPackages, AddVendors, BonusRequest, Change, Confirm, Dashboard, EditPackage, EditVendors, ErrorPage, InvestmentRequest, Investors, LandingPage, Login, Packages, PrivacyPolicy, Request, Settings, Signup, Subscribe, Subscription, Transaction, UserDetails, Users, VendorList, Vendors, WithdrawalRequest } from "./pages";
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
          path: "signup",
          element: <Signup />
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
          path: "privacy",
          element: <PrivacyPolicy />
        },
        {
          path: "terms",
          element: <PrivacyPolicy />
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
              path: "subscribe",
              children: [
                {
                  index: true,
                  element: <Subscribe />
                },

                {
                  path: ":id",
                  element: <VendorList />
                }
              ]

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
              path: "vendors",
              children: [
                {
                  index: true,
                  element: <Vendors />
                },

                {
                  path: "add",
                  element: <AddVendors />
                },

                {
                  path: "edit",
                  children: [
                    {
                      index: true,
                      element: <Vendors />
                    },

                    {
                      path: ":id",
                      element: <EditVendors />
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
              children: [
                {
                  index: true,
                  element: <Investors />
                },

                {
                  path: ":id",
                  element: <UserDetails />

                }
              ]

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
