import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

let root = ReactDOM.createRoot(document.getElementById("root"));

const route = createBrowserRouter([
    {
        path: "/",
        element: <div>.... Wood Commerce Loading ....</div>
    }
]);

root.render(<RouterProvider router={route} />);
