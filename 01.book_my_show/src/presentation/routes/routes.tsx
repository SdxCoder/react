import { RouteObject } from "react-router-dom";
import App from "../app.js";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/movies",
            }
        ]
    }
]

export default routes;