import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path:"/home",
        element: <Home />,
    },
    {
        path:"/register",
        element: <Register />
    }
]);