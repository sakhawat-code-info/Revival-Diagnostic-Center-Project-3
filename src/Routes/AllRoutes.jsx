import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import App from "../App";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import Root from '../Layout/Root'
import PrivateRoute from "./PrivateRoute";
import UpcomingAppointments from "../Pages/UpcomingAppointments";
import TestResults from "../Pages/TestResults";
import Profile from "../Pages/Profile";
import ProfileUpdate from "../Pages/ProfileUpdate";
import AdminDashboard from "../Layout/AdminDashboard";
import AllUsers from "../AdminPages/AllUsers";
import AddNewTest from "../AdminPages/AddNewTest";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/registration",
                element: <RegisterPage />,
            },
            {
                path: "/upcomingAppointments",
                element: <PrivateRoute><UpcomingAppointments /></PrivateRoute>,
            },
            {
                path: "/testResults",
                element: <PrivateRoute><TestResults /></PrivateRoute>,
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile /></PrivateRoute>,
            },
            {
                path: "/profileUpdate",
                element: <PrivateRoute><ProfileUpdate /></PrivateRoute>,
            },
        ],
    },
    {
        path: "adminDashboard",
        element: <AdminDashboard />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/adminDashboard/allUsers",
                element: <AllUsers />,
            },
            {
                path: "/adminDashboard/addNewTest",
                element: <AddNewTest />,
            },
        ],
    },
]);