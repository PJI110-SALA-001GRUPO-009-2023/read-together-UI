import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//1- configurando o Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Start from './pages/Start/Start.jsx'
import SignIn from './pages/SignIn/SignIn.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';

import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    // 3- pagina de error
    errorElement: <ErrorPage/>,
    children:[

      {
        path: "/",
        element: <Start/>
      },
      {
        path: "/login",
        element: <SignIn/>
      },
      {
        path: "/cadastro",
        element: <SignUp/>
      },

      // 4 - nested routes
      
    ]
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
