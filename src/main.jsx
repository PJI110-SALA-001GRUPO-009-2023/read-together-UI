import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/root'
import Clube from './routes/clube/clube'
import Index from './App'


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
