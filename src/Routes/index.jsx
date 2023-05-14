import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import ProfileLayout from "../layouts/ProfileLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path:"/home",
        element: <HomeLayout />,
    },
    {
        path:"/register",
        element: <Register />
    },
    {
        path:"/profile",
        element: <ProfileLayout />,
    },
]);