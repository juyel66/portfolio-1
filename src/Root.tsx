import { createBrowserRouter } from "react-router";
import Home from "./Component/Home/Home";

export const Router = createBrowserRouter ([
    {
        path: "/",
        element: <Home />
    }
])