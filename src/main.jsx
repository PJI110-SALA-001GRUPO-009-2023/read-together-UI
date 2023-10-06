import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './root'

import Start from './views/Start/Start.jsx'
import SignIn from './views/SignIn/SignIn.jsx';
import SignUp from './views/SignUp/SignUp.jsx';

import ErrorPage from './views/ErrorPage';

import Clube from './views/Clube/clube'



const clubeData = { admin: true, url: null, nome: 'iae', subtitulo: 'haha', descricao: 'palmeiras não tem mundiaaAAAlll' }

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
     

        errorElement: <ErrorPage/>,

        children: [

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

            {

                path: '/clube/:idClube',
                element: <Clube data={clubeData} />,
            }
        ],
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>
)
