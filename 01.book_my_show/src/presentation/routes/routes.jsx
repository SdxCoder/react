import App from "../app.jsx";

const routes = [
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