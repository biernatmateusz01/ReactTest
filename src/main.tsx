import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import IdElement from './IdElement.tsx'
import './index.css'
import DataFetcher from './DataFetcher.tsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    path: "/"
  },
  {
    element: <IdElement/>,
    path: "/:id"
  },
  {
    element: <DataFetcher/>,
    path: "/data"
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
