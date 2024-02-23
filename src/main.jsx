import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import jugadores from './data/jugadores'
import JugadoresViews from './views/JugadoresViews.jsx'

  const routes = [
    {
      path: '/',
      element: <App />
    }
  ]
  jugadores.forEach((jugadores) => {
    routes.push({
      path: jugadores.nombre,
      element: <JugadoresViews jugadores={jugadores}/>
    })
  })

  const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
