import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Products from "../components/Products/Products";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Product from "../components/Product/Product";
import PrivateRoutes from "../Private/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "home",
                element: <Home></Home>
            },
            {
                path: "/product",
                element: <PrivateRoutes><Product></Product></PrivateRoutes>,
                loader: async () => {
                    return fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
                },
            },
            {
                path: "/products/:name",
                element: <PrivateRoutes><Products></Products></PrivateRoutes>,
                loader: async ({params}) => {
                    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`)
                }
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])