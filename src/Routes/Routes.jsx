import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Layout/AllUsers/AllUsers";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoutes";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import Payment from "../Pages/Dashboard/payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

// import Test from "../Pages/Home/Banner/test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
     

      {
        path: "order/:category",
        element: <Order></ Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      // {
      //   path: "/test",
      //   element: <Test></Test>,
      // },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ), 
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },

      // =================admin===============
      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
          // <AllUsers></AllUsers>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageItem",
        element: (
          <AdminRoute>
            <ManageItem></ManageItem>
          </AdminRoute>
        ),
      },
    ],
  },
]);
