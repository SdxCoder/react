import { RouteObject } from "react-router-dom";
import App from "../app.js";
import PopularMoviesPage from "../popular-movies/popular_movies_page.js";
import HomePage from "../home/home_page.js";
import NowPlayingMoviesPage from "../now-playing-movies/now_playing_movies_page.js";
import UpcomingMoviesPage from "../upcoming-movies/upcoming_movies_page.js";
import TopRatedMoviesPage from "../top-rated-movies/top_rated_movies_page.js";
import ErrorPage from "../error_page.js";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,

            },
            {
                path: "movie",
                element: <PopularMoviesPage />,
            },
            {
                path: "movie/now-playing",
                element: <NowPlayingMoviesPage />,
            }, {
                path: "movie/upcoming",
                element: <UpcomingMoviesPage />,
            }, {
                path: "movie/top-rated",
                element: <TopRatedMoviesPage />,
            },

        ]

    }
]

export default routes;