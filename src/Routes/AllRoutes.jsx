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
import AllTests from "../AdminPages/AllTests";
import TestDataUpdate from "../AdminPages/TestDataUpdate";
import AllAppointments from "../AdminPages/AllAppointments";
import AddBanner from "../AdminPages/AddBanner";
import AllBanner from "../AdminPages/AllBanner";
import BannerDataUpdate from "../AdminPages/BannerDataUpdate";
import BookingRatioDeliveryReportChart from "../AdminPages/BookingRatioDeliveryReportChart";
import UserAllTestPage from "../Pages/UserAllTestPage";
import TestDetailsPage from "../Pages/TestDetailsPage";
import PrivateRouteForAdmin from "./PrivateRouteForAdmin";
import BillInfo from "../Pages/BillInfo";
import Checkout from "../Pages/Checkout";


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
                path: "/userAllTestPage",
                element: <UserAllTestPage />,
            },
            {
                path: "/testDetails/:updateId",
                element: <PrivateRoute><TestDetailsPage /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b9a12-server-side-rho.vercel.app/getSingleTestData/${params.updateId}`)
            },
            {
                path: "/billInfo",
                element: <PrivateRoute><BillInfo /></PrivateRoute>,
            },
            {
                path: "/checkout",
                element: <PrivateRoute><Checkout /></PrivateRoute>,
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
        element: <PrivateRouteForAdmin><AdminDashboard /></PrivateRouteForAdmin>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/adminDashboard/allUsers",
                element: <PrivateRouteForAdmin><AllUsers /></PrivateRouteForAdmin>,
            },
            {
                path: "/adminDashboard/addNewTest",
                element: <PrivateRouteForAdmin><AddNewTest /></PrivateRouteForAdmin>,
            },
            {
                path: "/adminDashboard/allTests",
                element: <PrivateRouteForAdmin><AllTests /></PrivateRouteForAdmin>,
            },
            {
                path: "/adminDashboard/testDataUpdate/:updateId",
                element: <PrivateRouteForAdmin><TestDataUpdate /></PrivateRouteForAdmin>,
                loader: ({ params }) => fetch(`https://b9a12-server-side-rho.vercel.app/getSingleTestData/${params.updateId}`)
            },
            {
                path: "/adminDashboard/allAppointments",
                element: <PrivateRouteForAdmin><AllAppointments /></PrivateRouteForAdmin>,
            },
            {
                path: "/adminDashboard/addBanner",
                element: <PrivateRouteForAdmin><AddBanner /></PrivateRouteForAdmin>,
            },
            {
                path: "/adminDashboard/allBanner",
                element: <PrivateRouteForAdmin><AllBanner /></PrivateRouteForAdmin>,
            },
            {
                path: "/adminDashboard/bannerDataUpdate/:updateId",
                element: <PrivateRouteForAdmin><BannerDataUpdate /></PrivateRouteForAdmin>,
                loader: ({ params }) => fetch(`https://b9a12-server-side-rho.vercel.app/getSingleBannerData/${params.updateId}`)
            },
            {
                path: "/adminDashboard/bookingRatioDeliveryReportChart",
                element: <PrivateRouteForAdmin><BookingRatioDeliveryReportChart /></PrivateRouteForAdmin>,
            },
        ],
    },
]);