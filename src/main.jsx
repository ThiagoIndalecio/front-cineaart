import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routers/Home.jsx'
import Movie from './routers/Movie.jsx'
import MovieDetail from './routers/MovieDetail'
import Error404 from './routers/Error404';
import App from './App.jsx';
import MyTickets from "./routers/MyTickets.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "movie/:id",
        element: <MovieDetail />
      },

      {
        path: "*",
        element: <Error404 />
      },
      {
        path: "/my-tickets",
        element: <MyTickets />
      }


    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
