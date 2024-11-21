import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Errorpage from './components/Errorpage.jsx';
import Categorypage from './pages/category/Categorypage.jsx';
import Search from './pages/Search.jsx';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import SingleProduct from './pages/products/SingleProduct.jsx';
import axios from 'axios';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Signin />
      },
      {
        path: "/categories/:category",
        element: <Categorypage/>
      },
      {
        path: "/search",
        element: <Search/>
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/items/:name",
        element: <SingleProduct />,
        loader: async ({params}) => {
          return fetch(`http://localhost:5000/api/items/${params.name}`)
        }
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
