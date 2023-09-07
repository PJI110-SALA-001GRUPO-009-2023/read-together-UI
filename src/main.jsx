import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './root'
import Clube from './views/Clube/clube'
import Index from './views/Welcome/App'


const clubeData = { admin: true, url: null, nome: 'iae', subtitulo: 'haha', descricao: 'palmeiras não tem mundiaaAAAlll' }

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        index: <Index />,
        children: [
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
