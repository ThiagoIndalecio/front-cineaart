import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routers/Home'
import Movie from './routers/Movie'
import MovieDetail from './routers/MovieDetail'
import Error404 from './routers/Error404';
import App from './App';

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
      }


    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
