import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/appLayout";
import ProductDetail from "./components/ProductDetail";
import Body from "./components/Body";

let root = ReactDOM.createRoot(document.getElementById("root"));

const route = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/product/:productId",
                element: <ProductDetail />
            }
        ]
    }
]);

root.render(<RouterProvider router={route} />);
