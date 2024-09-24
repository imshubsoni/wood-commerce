import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/appLayout";

let root = ReactDOM.createRoot(document.getElementById("root"));

const route = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />
    }
]);

root.render(<RouterProvider router={route} />);
