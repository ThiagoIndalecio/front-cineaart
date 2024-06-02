import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import  Home  from './routers/Home.jsx'
import  Movie from './routers/Movie.jsx'
import  MovieDetail from './routers/MovieDetail'
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
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
      }
   
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>       
    <RouterProvider router={router} />
  </React.StrictMode>,
)
