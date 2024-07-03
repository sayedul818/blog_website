import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import BLogs from './Components/Blog/BLogs';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import SingleBlog from './Components/Blog/SingleBlog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
      },
      {
        path:"/about",
        element: <About></About>,
      },
      {
        path:"/blog",
        element: <BLogs></BLogs>,
      },
      {
        path:"/contact",
        element: <Contact></Contact>,
      },
      {
        path:"/service",
        element: <Services></Services>,
      },
      {
        path:"/blog/:id",
        element:<SingleBlog></SingleBlog>,
        loader:({params})=>fetch(`http://localhost:5000/blogs/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
