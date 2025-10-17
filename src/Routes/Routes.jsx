import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import App from "../App"; 
import Homepage from "../Pages/HomePage";
import AboutUs from "../Pages/AboutAs";
import Profile from "../Pages/Profile";
import Signup from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path:"/about-us",
         element:<AboutUs></AboutUs>
      },
      {
        path:"/profile",
        element:<Profile></Profile>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
      {
        path:"/signin",
        element:<SignIn></SignIn>
      }
    ],
  },
]);
