import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../layouts/DashBoardLayout";
import MainLayout from "../layouts/MainLayout";
import AddSellPost from "../pages/Dasboard/AddSellPost/AddSellPost";
import AllBuyers from "../pages/Dasboard/AllBuyers/AllBuyers";
import AllSeller from "../pages/Dasboard/AllSeller/AllSeller";
import DashBoardHome from "../pages/Dasboard/DashBoardHome/DashBoardHome";
import MyBooking from "../pages/Dasboard/MyBooking/MyBooking";
import MySellPost from "../pages/Dasboard/MySellPost/MySellPost";
import DisplayBikers from "../pages/DisplayBikers/DisplayBikers";
import Blogs from "../pages/home/Blogs/Blogs";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Page404 from "../pages/Page404/Page404";
import Ragister from "../pages/ragister/Ragister";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivetRoute";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/ragister',
                element: <Ragister></Ragister>
            },
            {
                path: '/bikes/:id',
                element: <DisplayBikers></DisplayBikers>,
                loader: ({ params }) => fetch(`https://bike-nation-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><DashBoardHome></DashBoardHome></PrivateRoute>
                
            },
            {
                path: '/dashboard/myBookings',
                element: <BuyerRoute><MyBooking></MyBooking></BuyerRoute>

            },
            {
                path: '/dashboard/AddSellPost',
                element: <SellerRoute><AddSellPost></AddSellPost></SellerRoute>
            },
            {
                path: '/dashboard/MySellPost',
                element: <SellerRoute><MySellPost></MySellPost></SellerRoute>

            },
            {
                path: '/dashboard/AllBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/AllSeller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            }

        ]
    },
    {
        path: '*',
        element: <Page404></Page404>
    }


])

export default router;