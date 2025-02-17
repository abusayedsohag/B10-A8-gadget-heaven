import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch(`../Categories.json`),
        children: [
          {
            path: '/',
            element: <Products></Products>,
            loader: () => fetch(`../products.json`),
          },
          {
            path: '/category/:categoryname',
            element: <Products></Products>,
            loader: () => fetch(`../products.json`),
          }
        ]
      },
      {
        path: 'productDetails/:productname',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch(`../products.json`),
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch(`../products.json`),
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
