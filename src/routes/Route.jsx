import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Men from "../Components/Men/Men";
import Women from "../Components/Women/Women";
import LogIn from "../Components/LogIn/LogIn";
import Kid from "../Pages/Kid/Kid";
// import MyCart from "../Components/MyCart/MyCart";
import MyCart from "../Components/MyCart/MyCart"
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";

import TestCart from "../Components/TestCart/TestCart";
import Dashboard from "../Layout/Dashboard";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Review from "../Pages/Dashboard/Review/Review";
import History from "../Pages/Dashboard/History/History";

  

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:"/",
            element:<Home></Home>
        },
        // {
        //   path: "/mycart",
        //   element:<MyCart></MyCart>
        // },
        {
          path: "/men",
          element:<Men></Men>
        },
        {
          path: "/women",
          element:<Women></Women>
        },
        {
          path: "/kid",
          element:<Kid></Kid>
        },
        {
          path: "/login",
          element:<LogIn></LogIn>
        },
        {
          path: "/register",
          element:<Register></Register>
        }
        
      ]
     
    },
    {
      path:'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'mycart',
          element:<MyCart></MyCart>
        },
        {
          path: 'payment',
          element:<Payment></Payment>
        },
        {
          path: 'review',
          element:<Review></Review>
        },
        {
          path: 'history',
          element:<History></History>
        },
        // {
        //   path: 'testcart',
        //   element:<TestCart></TestCart>
        // }
      ]
    }
  ]);