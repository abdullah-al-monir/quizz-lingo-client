import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import LeaderBoard from "../pages/LeaderBoard/LeaderBoard";
import AboutUs from "../pages/AboutUs/AboutUs";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/leaderboard",
        element: <LeaderBoard />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default route;
