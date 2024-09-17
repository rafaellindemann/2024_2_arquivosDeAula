import { createRoot } from 'react-dom/client'
import './index.css'
import { ReactDOM } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router/routes'
import { GlobalContextProvider } from './contexts/GlobalContext'

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <RouterProvider router={router}>

    </RouterProvider>
  </GlobalContextProvider>
)
